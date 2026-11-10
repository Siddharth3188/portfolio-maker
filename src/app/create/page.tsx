 "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Bot, Check, Code2, Palette, Sparkles } from "lucide-react";
import { Brand } from "@/components/brand";
import { useProjectStore } from "@/store/project-store";

const professions = ["Developer", "Designer", "Student", "Photographer", "Writer", "Founder", "Other"];
const styles = ["Premium minimal", "Bold & expressive", "Editorial", "Dark & cinematic", "Warm & personal"];

export default function CreatePage() {
  const router = useRouter();
  const { draft, setDraft } = useProjectStore();

  function continueToDashboard() {
    // Milestone 1: this stores the draft in client state only.
    // Database persistence and actual generation arrive in later milestones.
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#090a0f]">
      <header className="flex h-[76px] items-center justify-between border-b border-white/[.07] px-5 sm:px-8"><Brand/><Link href="/dashboard" className="text-xs text-zinc-500 transition hover:text-white">Exit setup</Link></header>
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white"><ArrowLeft size={14}/> Back to home</Link>
        <div className="mb-9"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-violet-300"><Sparkles size={13}/> New portfolio</p><h1 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Let's make it yours.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Start with a few details. You can refine everything later in the editor.</p></div>
        <div className="mb-8 flex items-center gap-2"><div className="h-1 flex-1 rounded-full bg-violet-300"/><div className="h-1 flex-1 rounded-full bg-white/10"/><div className="h-1 flex-1 rounded-full bg-white/10"/></div>
        <div className="space-y-8 rounded-3xl border border-white/[.09] bg-[#111219] p-5 sm:p-8">
          <section><label htmlFor="project-name" className="text-sm font-medium">What should we call your portfolio?</label><input id="project-name" value={draft.name} onChange={(e)=>setDraft({name:e.target.value})} placeholder="e.g. Alex Morgan — Portfolio" className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-700 focus:border-violet-300/50"/></section>
          <section><p className="text-sm font-medium">Which best describes you?</p><div className="mt-3 flex flex-wrap gap-2">{professions.map((profession)=><button key={profession} onClick={()=>setDraft({profession})} className={`rounded-full border px-4 py-2.5 text-xs transition ${draft.profession===profession?"border-violet-300/50 bg-violet-300/10 text-violet-200":"border-white/10 text-zinc-500 hover:border-white/25 hover:text-white"}`}>{profession}</button>)}</div></section>
          <section><p className="text-sm font-medium">How would you like to start?</p><div className="mt-3 grid gap-3 sm:grid-cols-2"><button onClick={()=>setDraft({mode:"guided"})} className={`rounded-2xl border p-5 text-left transition ${draft.mode==="guided"?"border-violet-300/50 bg-violet-300/[.07]":"border-white/10 bg-black/10 hover:border-white/25"}`}><div className="flex items-center justify-between"><Code2 size={20} className="text-violet-200"/>{draft.mode==="guided"&&<Check size={16} className="text-violet-200"/>}</div><p className="mt-5 text-sm font-semibold">Guided setup</p><p className="mt-2 text-xs leading-5 text-zinc-500">Choose your style and build step by step.</p></button><button onClick={()=>setDraft({mode:"ai"})} className={`rounded-2xl border p-5 text-left transition ${draft.mode==="ai"?"border-violet-300/50 bg-violet-300/[.07]":"border-white/10 bg-black/10 hover:border-white/25"}`}><div className="flex items-center justify-between"><Bot size={20} className="text-violet-200"/>{draft.mode==="ai"&&<Check size={16} className="text-violet-200"/>}</div><p className="mt-5 text-sm font-semibold">AI creative brief</p><p className="mt-2 text-xs leading-5 text-zinc-500">Describe your vision in your own words.</p></button></div></section>
          {draft.mode==="guided"?<section><p className="text-sm font-medium">Choose a starting mood</p><div className="mt-3 flex flex-wrap gap-2">{styles.map((style)=><button key={style} onClick={()=>setDraft({style})} className={`rounded-full border px-3.5 py-2.5 text-xs transition ${draft.style===style?"border-violet-300/50 bg-violet-300/10 text-violet-200":"border-white/10 text-zinc-500 hover:text-white"}`}>{style}</button>)}</div></section>:<section><label htmlFor="vision" className="text-sm font-medium">Describe the portfolio you imagine</label><textarea id="vision" rows={4} value={draft.prompt} onChange={(e)=>setDraft({prompt:e.target.value})} placeholder="I want a clean, dark portfolio with bold typography. I'm a frontend developer who loves interactive experiences..." className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-zinc-700 focus:border-violet-300/50"/></section>}
          <div className="flex flex-col justify-between gap-3 border-t border-white/[.07] pt-6 sm:flex-row sm:items-center"><p className="text-[10px] leading-5 text-zinc-600">This is an onboarding preview. Generation and saving will be connected in upcoming milestones.</p><button onClick={continueToDashboard} disabled={!draft.name.trim()} className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-40">Continue <ArrowRight size={15}/></button></div>
        </div>
        <p className="mt-6 text-center text-[10px] text-zinc-700">01 / 03 — Your starting point</p>
      </div>
    </main>
  );
}
