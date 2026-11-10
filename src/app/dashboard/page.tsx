import Link from "next/link";
import { ArrowDownUp, ArrowUpRight, Bell, Ellipsis, FolderPlus, Globe2, LayoutGrid, Plus, Search, Settings2, Sparkles } from "lucide-react";
import { Brand } from "@/components/brand";
import { sampleProjects } from "@/lib/data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#090a0f]">
      <aside className="fixed inset-y-0 left-0 hidden w-[250px] flex-col border-r border-white/[.07] bg-[#0c0d13] px-5 py-6 lg:flex">
        <Brand/>
        <div className="mt-12 space-y-1">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.18em] text-zinc-600">Workspace</p>
          <div className="flex items-center gap-3 rounded-xl bg-violet-300/10 px-3 py-2.5 text-sm text-violet-200"><LayoutGrid size={17}/> Overview</div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500"><Globe2 size={17}/> My websites</div>
          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500"><Settings2 size={17}/> Settings</div>
        </div>
        <div className="mt-auto rounded-2xl border border-violet-300/15 bg-violet-300/[.06] p-4"><Sparkles size={17} className="text-violet-300"/><p className="mt-3 text-sm font-medium">Your next idea starts here.</p><p className="mt-1 text-xs leading-5 text-zinc-500">Create a fresh portfolio and give your work a home.</p><Link href="/create" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-200">Start creating <ArrowUpRight size={13}/></Link></div>
        <div className="mt-5 flex items-center gap-3 border-t border-white/[.07] pt-5"><div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-400 text-xs font-bold text-black">Y</div><div><p className="text-xs font-medium">Your workspace</p><p className="text-[10px] text-zinc-600">Demo account</p></div><Ellipsis size={17} className="ml-auto text-zinc-600"/></div>
      </aside>
      <div className="lg:pl-[250px]">
        <header className="flex h-[76px] items-center justify-between border-b border-white/[.07] px-5 sm:px-8"><div className="lg:hidden"><Brand/></div><div className="hidden text-sm text-zinc-500 lg:block">Workspace <span className="mx-2 text-zinc-700">/</span><span className="text-white">Overview</span></div><div className="flex items-center gap-3"><button aria-label="Notifications" className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-400"><Bell size={16}/></button><div className="grid size-8 place-items-center rounded-full bg-violet-300 text-xs font-bold text-black">Y</div></div></header>
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[.18em] text-violet-300">Your creative space</p><h1 className="mt-3 text-3xl font-semibold tracking-[-.06em] sm:text-4xl">Good to see you.</h1><p className="mt-2 text-sm text-zinc-500">A little progress goes a long way. What are we creating today?</p></div><Link href="/create" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-200"><Plus size={16}/> New portfolio</Link></div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[["Total projects","03"],["Published websites","01"],["Drafts in progress","02"]].map(([label,value])=><div key={label} className="rounded-2xl border border-white/[.08] bg-[#111219] p-5"><p className="text-xs text-zinc-500">{label}</p><p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p></div>)}
          </div>
          <div className="mt-12 flex items-center justify-between"><div><h2 className="text-lg font-semibold">Your websites</h2><p className="mt-1 text-xs text-zinc-600">Pick up where you left off.</p></div><button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400"><ArrowDownUp size={13}/> Recently updated</button></div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sampleProjects.map((project)=><article key={project.id} className="overflow-hidden rounded-2xl border border-white/[.08] bg-[#111219] transition hover:border-violet-300/25"><div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent} p-5`}><div className="absolute inset-4 rounded-xl border border-white/15 bg-black/10 p-4"><div className="flex justify-between"><span className="text-[8px] uppercase tracking-[.2em] text-white/60">Portfolio / 2026</span><span className="text-[8px] text-white/60">↗</span></div><div className="mt-7"><div className="h-2 w-16 rounded bg-white/35"/><div className="mt-2 h-5 w-32 rounded bg-white/70"/><div className="mt-2 h-1.5 w-24 rounded bg-white/25"/></div><div className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">{project.initials}</div></div><span className={`absolute right-7 top-7 rounded-full px-2.5 py-1 text-[9px] ${project.status==="Published"?"bg-emerald-300/15 text-emerald-200":"bg-white/10 text-white/70"}`}>{project.status}</span></div><div className="p-5"><div className="flex items-start justify-between"><div><h3 className="font-semibold">{project.name}</h3><p className="mt-1 text-xs text-zinc-500">{project.role}</p></div><button aria-label={`More options for ${project.name}`} className="text-zinc-600"><Ellipsis size={18}/></button></div><div className="mt-5 flex items-center justify-between border-t border-white/[.07] pt-4"><div><p className="text-[10px] text-zinc-600">{project.style}</p><p className="mt-1 text-[10px] text-zinc-700">{project.updated}</p></div><Link href="/create" className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-200">Open project <ArrowUpRight size={13}/></Link></div></div></article>)}
            <Link href="/create" className="group flex min-h-[330px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[.015] p-8 text-center transition hover:border-violet-300/40 hover:bg-violet-300/[.03]"><div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-violet-200 transition group-hover:bg-violet-300/10"><FolderPlus size={21}/></div><p className="mt-4 text-sm font-medium">Create something new</p><p className="mt-2 max-w-[190px] text-xs leading-5 text-zinc-600">Start a fresh portfolio from your own ideas.</p></Link>
          </div>
          <p className="mt-10 text-center text-[10px] text-zinc-700">Milestone 1 preview · Sample projects are demonstration data</p>
        </div>
      </div>
    </main>
  );
}
