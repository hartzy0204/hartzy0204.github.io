"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Marquee } from "@/components/magicui/marquee";
import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "../../utils/supabase";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [comments, setComments] = useState<
    { id: number; name: string; comment: string; created_at: string }[]
  >([]);
  const [likeCount, setLikeCount] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    const liked = localStorage.getItem("hasLikedContactPage");
    if (liked) setHasLiked(true);
    const commented = localStorage.getItem("hasCommentedOnContactPage");
    if (commented) setHasCommented(true);

    fetchLikeCount();
    fetchComments();

    const channel = supabase
      .channel("realtime_updates")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "likes" },
        fetchLikeCount
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "comments" },
        fetchComments
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleCaptchaVerify = useCallback(async (token: string | null) => {
    if (!token) {
      setIsCaptchaVerified(false);
      Swal.fire("CAPTCHA Error", "Please complete the CAPTCHA.", "error");
      return;
    }

    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    setIsCaptchaVerified(true);
    Swal.fire({
      title: "CAPTCHA Verified!",
      text: "You can now like, comment, or send a message.",
      icon: "success",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#4CAF50",
    });
  }, []);

  const fetchLikeCount = async () => {
    const { count } = await supabase
      .from("likes")
      .select("*", { count: "exact", head: true })
      .eq("like", 1);
    setLikeCount(count || 0);
  };

  const fetchComments = async () => {
    const { data } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    setComments(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      Swal.fire(
        "CAPTCHA Required",
        "Please verify you're human before sending.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("messages")
        .insert([{ email, message }]);
      if (error) throw error;

      Swal.fire("Success!", "Message Sent Successfully!", "success");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Send message error:", error);
      Swal.fire("Error!", "Failed to send message. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddComment = async () => {
    if (hasCommented) {
      Swal.fire("Already Commented", "You can only comment once.", "info");
      return;
    }

    if (!isCaptchaVerified) {
      Swal.fire("CAPTCHA Required", "Please verify before posting.", "error");
      return;
    }

    if (!newComment.trim() || !newName.trim()) {
      Swal.fire(
        "Invalid Input",
        "Please fill in both name and comment fields.",
        "warning"
      );
      return;
    }

    try {
      const { error } = await supabase
        .from("comments")
        .insert([{ name: newName, comment: newComment }]);
      if (error) throw error;

      localStorage.setItem("hasCommentedOnContactPage", "true");
      setHasCommented(true);

      Swal.fire("Success!", "Comment added successfully!", "success");
      setNewComment("");
      setNewName("");
    } catch (error) {
      console.error("Add comment error:", error);
      Swal.fire("Error!", "Failed to add comment. Try again.", "error");
    }
  };

  // 👍 Like Page
  const handleLike = async () => {
    if (hasLiked) {
      Swal.fire("Already Liked", "You've already liked this page!", "info");
      return;
    }

    if (!isCaptchaVerified) {
      Swal.fire("CAPTCHA Required", "Please verify before liking.", "error");
      return;
    }

    try {
      const { error } = await supabase.from("likes").insert([{ like: 1 }]);
      if (error) throw error;

      setHasLiked(true);
      localStorage.setItem("hasLikedContactPage", "true");
      Swal.fire("Thank you!", "Thanks for your support!", "success");
    } catch (error) {
      console.error("Like error:", error);
      Swal.fire("Error!", "Failed to register your like.", "error");
    }
  };

  // Global disable flag
  const disabled = !isCaptchaVerified;

  return (
    <div className="min-h-screen p-4 md:p-6 max-w-4xl mx-auto text-white">
      {/* HEADER */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          <AuroraText>
            Get in{" "}
            <LineShadowText className="italic px-2" shadowColor="white">
              Touch
            </LineShadowText>
          </AuroraText>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* MESSAGE FORM */}
        <div className="w-full lg:w-1/2 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6">Send A Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
              placeholder="your.email@example.com"
              required
              className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={disabled}
              placeholder="Your message here..."
              required
              className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <RainbowButton type="submit" disabled={isSubmitting || disabled}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </RainbowButton>
          </form>
        </div>

        {/* COMMENT FORM */}
        <div className="w-full lg:w-1/2 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={hasCommented || disabled}
            placeholder="Your name"
            required
            className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 ${
              hasCommented || disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          <textarea
            rows={5}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={hasCommented || disabled}
            placeholder="Your comment (max 50 chars)"
            maxLength={50}
            required
            className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 mt-4 ${
              hasCommented || disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          <RainbowButton
            onClick={handleAddComment}
            disabled={hasCommented || disabled}
          >
            {hasCommented ? "Commented" : "Post Comment"}
          </RainbowButton>

          {comments.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Recent Comments</h3>
              <Marquee pauseOnHover className="[--duration:20s]">
                {comments.slice(0, 5).map((c) => (
                  <div
                    key={c.id}
                    className="mx-3 bg-white/5 p-3 rounded-lg border border-white/10"
                  >
                    <p className="italic text-white/80">"{c.comment}"</p>
                    <p className="text-right text-sm text-primary">
                      — {c.name}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </div>

      {/* CAPTCHA */}
      <div className="mt-8 flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleCaptchaVerify}
          onErrored={() => {
            console.error("reCAPTCHA error occurred");
            Swal.fire(
              "CAPTCHA Error",
              "Please reload the page and try again.",
              "error"
            );
          }}
          theme="dark"
        />
      </div>

      {/* LIKE SECTION */}
      <div className="mt-10 flex flex-col items-center">
        <button
          onClick={handleLike}
          disabled={hasLiked || disabled}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            hasLiked
              ? "bg-green-500/20 text-green-400 cursor-not-allowed"
              : disabled
              ? "bg-white/5 text-gray-400 cursor-not-allowed opacity-50"
              : "bg-white/5 hover:bg-white/10 text-white"
          }`}
        >
          👍 {hasLiked ? "Liked!" : "Like this page"} ({likeCount})
        </button>
        <p className="text-sm mt-2 text-white/60">
          {disabled
            ? "Please verify CAPTCHA first"
            : hasLiked
            ? "Thanks for your support!"
            : "Show your appreciation!"}
        </p>
      </div>
    </div>
  );
}
