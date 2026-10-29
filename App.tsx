import { useState, useEffect, useId } from 'react';
import { AlertCircle, ArrowRight, Award, BookOpen, Calendar, Check, CheckCircle, ChevronRight, Download, Eye, FileCheck, FileText, Filter, Globe, Grid, Layers, Lock, LogOut, Mail, MapPin, Menu, Newspaper, Plus, Printer, Search, Send, Share2, Shield, Sparkles, Trash2, UserCheck, Users, X } from 'lucide-react';

// ==========================================
// MOCK INITIAL DATA & INITIAL STATES
// ==========================================

const INITIAL_PRESS_RELEASES = [
  {
    id: "pr-101",
    slug: "ieb-election-statement-2026",
    title: "প্রকৌশল সেক্টরে স্বচ্ছতা ও জাতীয় উন্নয়নে তরুণ প্রকৌশলীদের ভূমিকার আহ্বান",
    date: "২০২৬-০২-১২",
    summary: "সচেতন প্রকৌশলী সমাজের পক্ষ থেকে প্রকৌশল খাতের সার্বিক উন্নয়ন, স্বচ্ছতা রক্ষা ও মেধাভিত্তিক মুল্যায়নের দাবিতে বিশেষ বিজ্ঞপ্তি।",
    content: `ঢাকা — সচেতন প্রকৌশলী সমাজ-এর কেন্দ্রীয় কমিটির পক্ষ থেকে এক প্রেস বিজ্ঞপ্তিতে জানানো যাচ্ছে যে, দেশের সাম্প্রতিক ভৌত অবকাঠামো ও প্রযুক্তিগত উন্নয়নে প্রকৌশলীদের ভূমিকা অনস্বীকার্য। তবে পেশাগত সততা ও মেধার সঠিক মূল্যায়ন ব্যতীত এই অগ্রগতি টেকসই হতে পারে না।

সংগঠনটির নেতৃবৃন্দ বলেন, "মহান মুক্তিযুদ্ধের চেতনায় উদ্বুদ্ধ হয়ে আমাদের দেশের সকল ইঞ্জিনিয়ারিং সেক্টরে স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করতে হবে। তরুণ প্রকৌশলীদের গবেষণা ও উদ্ভাবনে উদ্বুদ্ধ করার পাশাপাশি জাতীয় নীতি নির্ধারণে প্রকৌশলীদের অংশগ্রহণ বাড়ানো জরুরি।"

প্রেস বিজ্ঞপ্তিতে সংগঠনের পক্ষ থেকে ৪-দফা দাবিনামা পেশ করা হয়:
১. সকল প্রকৌশল প্রকল্পে স্বচ্ছতা ও আধুনিক প্রযুক্তি নির্ভর মনিটরিং ব্যবস্থা চালু করা।
২. প্রকৌশলীদের পেশাগত মানোন্নয়নে নিয়মিত টেকনিক্যাল ওয়ার্কশপ ও সেমিনারের আয়োজন।
৩. দুর্নীতিমুক্ত ও মেধানির্ভর কর্ম পরিবেশ সৃষ্টি।
৪. দেশীয় প্রযুক্তি ও গবেষকদের অগ্রাধিকার প্রদান।

সচেতন প্রকৌশলী সমাজ সর্বদা প্রকৌশলী সমাজ ও দেশের কল্যাণে কাজ করে যেতে প্রতিশ্রুতিবদ্ধ।`,
    pdfUrl: "#",
    featuredImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    category: "অফিসিয়াল বক্তব্য",
    views: 1420
  },
  {
    id: "pr-102",
    slug: "liberation-war-ideals-seminar",
    title: "মহান মুক্তিযুদ্ধের আদর্শ ও সমৃদ্ধ বাংলাদেশ গঠনে প্রকৌশলীদের ভূমিকা শীর্ষক আলোচনা সভা",
    date: "২০২৬-০১-২৮",
    summary: "জাতীয় প্রেস ক্লাবে আয়োজিত সচেতন প্রকৌশলী সমাজের বিশেষ সেমিনার সংক্রান্ত অফিসিয়াল প্রেস রিলিজ।",
    content: `রাজধানীর এক মিলনায়তনে সচেতন প্রকৌশলী সমাজ-এর আয়োজনে "মুক্তিযুদ্ধের আদর্শ ও দেশ গঠনে প্রকৌশলবিদ্যা" শীর্ষক সেমিনার অনুষ্ঠিত হয়। 

বক্তারা বলেন, ১৯৭১ সালের স্বাধীনতা যুদ্ধ আমাদের আত্ম মর্যাদা ও সার্বভৌমত্বের ভিত্তি গড়ে দিয়েছে। আজকের প্রকৌশলীদের দায়িত্ব হলো সেই অর্জিত স্বাধীনতাকে অর্থনৈতিক ও পরিকাঠামোগত সমৃদ্ধিতে রূপান্তর করা। টেকসই বাঁধ নির্মাণ, পরিবেশবান্ধব মেগাপ্রকল্প এবং স্মার্ট গ্রিড স্থাপনে দেশীয় বিশেষজ্ঞদের প্রাধান্য দিতে হবে।`,
    pdfUrl: "#",
    featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "প্রেস বিজ্ঞপ্তি",
    views: 980
  },
  {
    id: "pr-103",
    slug: "sustainable-engineering-declaration",
    title: "জলবায়ু পরিবর্তন মোকাবেলায় টেকসই প্রকৌশল চর্চার সুনির্দিষ্ট প্রস্তাবনা",
    date: "২০২৫-১২-১৫",
    summary: "সচেতন প্রকৌশলী সমাজ পরিবেশ সুরক্ষায় ৪ দফা নীতিমালার ঘোষণা দিয়েছে।",
    content: `বাংলাদেশে দ্রুত বর্ধনশীল ভৌত অবকাঠামোর সাথে সাথে জলবায়ুর ঝুঁকি বৃদ্ধি পাচ্ছে। সচেতন প্রকৌশলী সমাজ এক যৌথ বিবৃতিতে পরিবেশবান্ধব গ্রিন বিল্ডিং ও নবায়নযোগ্য শক্তি ব্যবহারের জাতীয় নীতি বাস্তবায়নের অনুরোধ জানিয়ে প্রেস রিলিজ প্রকাশ করেছে।`,
    pdfUrl: "#",
    featuredImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    category: "নীতিমালা",
    views: 750
  }
];

const INITIAL_NEWS = [
  {
    id: "n-1",
    title: "বার্ষিক প্রকৌশল গবেষণা ও উদ্ভাবন সম্মেলন ২০২৬ অনুষ্ঠিত হতে যাচ্ছে",
    date: "২০২৬-০২-১৫",
    category: "সংবাদ",
    summary: "আগামী মাসে ঢাকার বঙ্গবন্ধু আন্তর্জাতিক সম্মেলন কেন্দ্রে অনুষ্ঠিত হবে প্রকৌশল মেলা ও সিম্পোজিয়াম।",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "n-2",
    title: "নবীন প্রকৌশলীদের জন্য ফ্রী টেকনিক্যাল স্কিল ডেভেলপমেন্ট বুটক্যাম্প",
    date: "২০২৬-০২-০১",
    category: "ঘোষণা",
    summary: "সিভিল, ইলেকট্রিক্যাল ও কম্পিউটার প্রকৌশলীদের বিশেষ প্রশিক্ষণ কর্মশালা সম্পর্কিত বিজ্ঞপ্তি।",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "n-3",
    title: "সচেতন প্রকৌশলী সমাজের নতুন সদস্য নিবন্ধন পোর্টাল চালু",
    date: "২০২৬-০১-১০",
    category: "নোটিশ",
    summary: "অনলাইনেই দেশ-বিদেশের যোগ্য প্রকৌশলীগণ এখন থেকে সদস্যপদের জন্য সরাসরি আবেদন করতে পারবেন।",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];

const INITIAL_ACTIVITIES = [
  {
    id: "act-1",
    title: "স্মার্ট অবকাঠামো ও টেকসই উন্নয়ন ওয়ার্কশপ",
    date: "২০২৬-০১-২০",
    location: "ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ (আইইবি)",
    category: "ওয়ার্কশপ",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    desc: "উচ্চক্ষমতাসম্পন্ন মেগাপ্রকল্প মনিটরিং এবং আধুনিক সেন্সর প্রযুক্তির ব্যবহার নিয়ে দিনব্যাপী বিশেষ টেকনিক্যাল সেশন।"
  },
  {
    id: "act-2",
    title: "জাতীয় দিবস সমূহে শ্রদ্ধাঞ্জলি ও স্মৃতিসৌধ যাত্রা",
    date: "২০২৫-১২-১৬",
    location: "জাতীয় স্মৃতিসৌধ, সাভার",
    category: "জাতীয় দিবস",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
    desc: "মহান বিজয় দিবসে বীর শহীদদের প্রতি সচেতন প্রকৌশলী সমাজের পুষ্পস্তবক অর্পণ ও নীরবতা পালন।"
  },
  {
    id: "act-3",
    title: "প্রকৌশলী গোলটেবিল বৈঠক: এআই ও রোবোটিক্সের ভবিষ্যৎ",
    date: "২০২৫-১১-০৫",
    location: "বুয়েট মিলনায়তন, ঢাকা",
    category: "সেমিনার",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    desc: "চতুর্থ শিল্পবিপ্লবে বাংলাদেশের প্রকৌশলীদের করণীয় ও কর্মসংস্থান সৃষ্টির সুযোগ নিয়ে বিশেষজ্ঞ আলোচনা।"
  }
];

const INITIAL_PUBLICATIONS = [
  {
    id: "pub-1",
    title: "সচেতন প্রকৌশলী সমাজ গঠনতন্ত্র ও পরিচালনা বিধিমালা",
    category: "গঠনতন্ত্র",
    date: "২০২৫",
    size: "২.৪ মেগাবাইট",
    desc: "সংগঠনের মূল্যবোধ, আদর্শ, উদ্দেশ্য এবং সাংগঠনিক পরিচালনার দিকনির্দেশনামূলক অফিশিয়াল সংবিধান Document।"
  },
  {
    id: "pub-2",
    title: "বার্ষিক প্রকৌশল ও প্রযুক্তি সারণী পত্রিকা (জার্নাল ২০২৫)",
    category: "জার্নাল",
    date: "২০২৫",
    size: "১৫.৮ মেগাবাইট",
    desc: "দেশীয় প্রকৌশলীদের গবেষণা নিবন্ধ, মেগাপ্রকল্পের কেস স্টাডি ও উদ্ভাবনভিত্তিক টেকনিক্যাল পেপারের সংকলন।"
  },
  {
    id: "pub-3",
    title: "জাতীয় ভৌত অবকাঠামো নিরাপত্তা ও প্রকৌশল সুশাসন ঘোষণা",
    category: "ঘোষণাপত্র",
    date: "২০২৪",
    size: "১.১ মেগাবাইট",
    desc: "নির্মাণে কোড মেনে চলা এবং নৈতিকতা অক্ষুণ্ণ রাখার স্বপক্ষে প্রকৌশলীদের যৌথ রূপরেখা।"
  }
];

const INITIAL_MEMBERSHIP_APPLICATIONS = [
  {
    id: "SPS-2026-8801",
    name: "প্রকৌশলী তানভীর আহমেদ",
    email: "tanvir.engr@example.com",
    phone: "01711000000",
    discipline: "Civil Engineering",
    qualification: "B.Sc. in Civil Engineering (BUET)",
    workplace: "Roads & Highways Department",
    designation: "Executive Engineer",
    category: "সাধারণ সদস্য",
    status: "Pending",
    date: "2026-02-14"
  },
  {
    id: "SPS-2026-8802",
    name: "প্রকৌশলী শারমিন সুলতানা",
    email: "sharmin.ee@example.com",
    phone: "01819112233",
    discipline: "Electrical & Electronic",
    qualification: "M.Sc. in EEE (CUET)",
    workplace: "PGCB",
    designation: "Assistant Engineer",
    category: "আজীবন সদস্য",
    status: "Approved",
    date: "2026-02-10"
  }
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
const SITE_NAME = 'সচেতন প্রকৌশলী সমাজ';
const PAGE_TITLES = { about: 'আমাদের সম্পর্কে', activities: 'কার্যক্রম', news: 'সংবাদ ও ঘোষণা', 'press-release': 'প্রেস রিলিজ', publications: 'প্রকাশনা', membership: 'সদস্যপদ', gallery: 'ফটোগ্যালারি', contact: 'যোগাযোগ', admin: 'অ্যাডমিন' };
const CONTACT_EMAIL = 'mail@spsbangladesh.org';
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';
const ADMIN_ENABLED = import.meta.env.VITE_ENABLE_ADMIN === 'true';
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS || '';

function parseHash() {
  const [page = 'home', slug = ''] = window.location.hash.replace(/^#\/?/, '').split('/');
  return { page: page || 'home', slug: slug ? decodeURIComponent(slug) : null };
}

// Sends a form to FORM_ENDPOINT (e.g. Formspree); without one it opens the visitor's mail app.
async function sendForm(subject, data) {
  if (FORM_ENDPOINT) {
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, ...data })
      });
      return r.ok;
    } catch { return false; }
  }
  const body = Object.entries(data).map(([k, v]) => k + ': ' + v).join('\n');
  window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  return true;
}

export default function App() {
  // Navigation & Page State
  const [route, setRoute] = useState(parseHash);
  const [lang, setLang] = useState('bn');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Data State
  const [pressReleases, setPressReleases] = useState(INITIAL_PRESS_RELEASES);
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const [publications] = useState(INITIAL_PUBLICATIONS);
  const [applications, setApplications] = useState(INITIAL_MEMBERSHIP_APPLICATIONS);

  // Active Item Modals & Previews
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  // Toast System State
  const [toast, setToast] = useState(null);

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPass, setAdminPass] = useState('');

  // Helper: Trigger Toast Notification
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const currentPage = route.page === 'ideals' ? 'about' : route.page;
  const selectedPR = route.page === 'press-release' && route.slug
    ? pressReleases.find(p => p.slug === route.slug || p.id === route.slug) || null
    : null;

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = (PAGE_TITLES[currentPage] ? PAGE_TITLES[currentPage] + ' | ' : '') + SITE_NAME;
  }, [route.page, route.slug]);

  const navigateTo = (page, slug = null) => {
    setMobileMenuOpen(false);
    const next = '#/' + page + (slug ? '/' + encodeURIComponent(slug) : '');
    if (window.location.hash === next) setRoute(parseHash());
    else window.location.hash = next;
  };
  const setSelectedPR = (pr) => navigateTo('press-release', pr ? pr.slug : null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-700 selection:text-white">
      
      {/* Dynamic Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white bg-slate-900 border border-slate-700 animate-fadeIn">
          {toast.type === 'success' ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <AlertCircle className="w-5 h-5 text-rose-400" />}
          <span className="text-sm font-medium">{toast.msg}</span>
        </div>
      )}

      {/* HEADER & NAVIGATION */}
      <Header 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        lang={lang} 
        setLang={setLang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* MAIN CONTENT ROUTER */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            navigateTo={navigateTo} 
            lang={lang}
            pressReleases={pressReleases}
            newsList={newsList}
            activities={activities}
            setSelectedPR={setSelectedPR}
          />
        )}
        {currentPage === 'about' && (<><AboutPage lang={lang} navigateTo={navigateTo} /><IdealsPage lang={lang} /></>)}
        {currentPage === 'activities' && (
          <ActivitiesPage 
            lang={lang} 
            activities={activities} 
            setSelectedActivity={setSelectedActivity} 
          />
        )}
        {currentPage === 'news' && (
          <NewsPage 
            lang={lang} 
            newsList={newsList} 
            setSelectedNews={setSelectedNews} 
          />
        )}
        {currentPage === 'press-release' && (
          <PressReleasePage 
            lang={lang} 
            pressReleases={pressReleases} 
            selectedPR={selectedPR}
            setSelectedPR={setSelectedPR}
            showToast={showToast}
          />
        )}
        {currentPage === 'publications' && <PublicationsPage lang={lang} publications={publications} />}
        {currentPage === 'membership' && (
          <MembershipPage 
            lang={lang} 
            applications={applications} 
            setApplications={setApplications} 
            showToast={showToast}
          />
        )}
        {currentPage === 'gallery' && <GalleryPage lang={lang} />}
        {currentPage === 'contact' && <ContactPage lang={lang} showToast={showToast} />}
        {ADMIN_ENABLED && currentPage === 'admin' && (
          <AdminDashboard 
            lang={lang}
            isAdminLoggedIn={isAdminLoggedIn}
            setIsAdminLoggedIn={setIsAdminLoggedIn}
            adminPass={adminPass}
            setAdminPass={setAdminPass}
            pressReleases={pressReleases}
            setPressReleases={setPressReleases}
            applications={applications}
            setApplications={setApplications}
            newsList={newsList}
            setNewsList={setNewsList}
            activities={activities}
            setActivities={setActivities}
            showToast={showToast}
          />
        )}
      </main>

      {/* ACTIVITY DETAIL MODAL */}
      {selectedActivity && (
        <Modal onClose={() => setSelectedActivity(null)}>
          <div className="space-y-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
              {selectedActivity.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900">{selectedActivity.title}</h3>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedActivity.date}</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {selectedActivity.location}</span>
            </div>
            <img loading="lazy" src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-44 object-cover rounded-xl" />
            <p className="text-slate-600 leading-relaxed text-base">{selectedActivity.desc}</p>
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button onClick={() => setSelectedActivity(null)} className="px-5 py-2.5 bg-slate-200 text-slate-800 font-medium rounded-lg hover:bg-slate-300 transition">
                বন্ধ করুন
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* NEWS DETAIL MODAL */}
      {selectedNews && (
        <Modal onClose={() => setSelectedNews(null)}>
          <div className="space-y-4">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
              {selectedNews.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900">{selectedNews.title}</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" /> {selectedNews.date}
            </div>
            {selectedNews.image && (
              <img loading="lazy" src={selectedNews.image} alt={selectedNews.title} className="w-full h-44 object-cover rounded-xl" />
            )}
            <p className="text-slate-600 leading-relaxed">{selectedNews.summary}</p>
            <p className="text-slate-600 leading-relaxed">
              সচেতন প্রকৌশলী সমাজ-এর অফিসিয়াল বুলেটিন অনুযায়ী উক্ত বিষয়ে সকল সমন্বয়ক ও সদস্যদের অবহিত করা যাচ্ছে। বিস্তারিত তথ্যের জন্য আমাদের ইমেইলে যোগাযোগ করুন।
            </p>
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button onClick={() => setSelectedNews(null)} className="px-5 py-2.5 bg-slate-200 text-slate-800 font-medium rounded-lg hover:bg-slate-300 transition">
                বন্ধ করুন
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* FOOTER */}
      <Footer navigateTo={navigateTo} lang={lang} />
    </div>
  );
}

// ==========================================
// BRAND LOGO COMPONENT (Official SVG Design)
// ==========================================
function SPSLogo({ className = "w-14 h-14" }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-md">
        {/* Outer Circular Frame */}
        <circle cx="150" cy="150" r="145" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
        
        {/* Top Arc Header Band (Deep Navy/Blue) */}
        <path d="M 150,150 L 10,150 A 140,140 0 0,1 290,150 Z" fill="#0f2942" />
        
        {/* Bottom Arc Header Band (Deep Green) */}
        <path d="M 150,150 L 290,150 A 140,140 0 0,1 10,150 Z" fill="#0d5c3a" />
        
        {/* Inner White Field */}
        <circle cx="150" cy="150" r="115" fill="#f8fafc" stroke="#ffffff" strokeWidth="4" />

        {/* Outer Ring Curved Text Elements */}
        {/* Top Text: সচেতন প্রকৌশলী সমাজ */}
        <path id={`pt${uid}`} d="M 35,150 A 115,115 0 0,1 265,150" fill="none" />
        <text className="font-bold fill-white text-[17px] tracking-wide" textAnchor="middle">
          <textPath href={`#pt${uid}`} startOffset="50%">
            সচেতন প্রকৌশলী সমাজ
          </textPath>
        </text>

        {/* Bottom Text: ইতিহাস • সংস্কৃতি • উন্নয়ন */}
        <path id={`pb${uid}`} d="M 22,150 A 128,128 0 0,0 278,150" fill="none" />
        <text className="font-semibold fill-white text-[13px] tracking-wider" textAnchor="middle">
          <textPath href={`#pb${uid}`} startOffset="50%">
            ইতিহাস  •  সংস্কৃতি  •  উন্নয়ন
          </textPath>
        </text>

        {/* Central Graphic Elements */}
        {/* 1. National Martyrs' Memorial (জাতীয় স্মৃতিসৌধ) */}
        <g transform="translate(150, 115) scale(0.95)" textAnchor="middle">
          {/* Outer Spires */}
          <polygon points="0,-75 -50,30 -40,30" fill="#94a3b8" />
          <polygon points="0,-75 50,30 40,30" fill="#cbd5e1" />
          {/* Inner Spires */}
          <polygon points="0,-75 -35,30 -25,30" fill="#64748b" />
          <polygon points="0,-75 35,30 25,30" fill="#94a3b8" />
          <polygon points="0,-75 -20,30 -10,30" fill="#475569" />
          <polygon points="0,-75 20,30 10,30" fill="#64748b" />
          <polygon points="0,-75 -8,30 0,30" fill="#d92525" />
          <polygon points="0,-75 8,30 0,30" fill="#b91c1c" />
          {/* Base Steps */}
          <rect x="-55" y="30" width="110" height="6" fill="#0d5c3a" rx="1" />
          <rect x="-45" y="36" width="90" height="5" fill="#d92525" rx="1" />
        </g>

        {/* 2. Padma / Cable Stayed Engineering Bridge & Water */}
        <g transform="translate(0, 15)">
          {/* River Waves */}
          <path d="M 40,200 Q 90,210 150,200 T 260,200" fill="none" stroke="#0284c7" strokeWidth="4" />
          <path d="M 40,210 Q 90,220 150,210 T 260,210" fill="none" stroke="#38bdf8" strokeWidth="3" />
          
          {/* Bridge Pillars */}
          <rect x="85" y="160" width="12" height="40" fill="#475569" />
          <rect x="144" y="150" width="12" height="50" fill="#334155" />
          <rect x="203" y="160" width="12" height="40" fill="#475569" />

          {/* Bridge Deck */}
          <rect x="40" y="165" width="220" height="8" fill="#0284c7" rx="2" />
          <line x1="40" y1="173" x2="260" y2="173" stroke="#0f2942" strokeWidth="3" />

          {/* Cable stays */}
          <line x1="150" y1="130" x2="60" y2="165" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="150" y1="130" x2="90" y2="165" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="150" y1="130" x2="120" y2="165" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="150" y1="130" x2="180" y2="165" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="150" y1="130" x2="210" y2="165" stroke="#0284c7" strokeWidth="1.5" />
          <line x1="150" y1="130" x2="240" y2="165" stroke="#0284c7" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// ==========================================
// HEADER COMPONENT
// ==========================================
function Header({ currentPage, navigateTo, lang, setLang, mobileMenuOpen, setMobileMenuOpen, isAdminLoggedIn }) {
  const navItems = [
    { id: 'home', bn: 'হোম', en: 'Home' },
    { id: 'about', bn: 'আমাদের সম্পর্কে', en: 'About Us' },
    { id: 'activities', bn: 'কার্যক্রম', en: 'Activities' },
    { id: 'news', bn: 'সংবাদ ও ঘোষণা', en: 'News' },
    { id: 'press-release', bn: 'প্রেস রিলিজ', en: 'Press Release', badge: true },
    { id: 'publications', bn: 'প্রকাশনা', en: 'Publications' },
    { id: 'gallery', bn: 'গ্যালারি', en: 'Gallery' },
    { id: 'membership', bn: 'সদস্যপদ', en: 'Membership' },
    { id: 'contact', bn: 'যোগাযোগ', en: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-white">spsbangladesh.org</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-block">মহান মুক্তিযুদ্ধের আদর্শে বিশ্বাসী প্রকৌশলীদের জাতীয় প্ল্যাটফর্ম</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Admin Console Entry */}
            {ADMIN_ENABLED && (<button
              onClick={() => navigateTo('admin')}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium transition ${
                currentPage === 'admin' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? 'এডমিন প্যানেল' : 'এডমিন লগইন'}</span>
            </button>)}
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-2">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <SPSLogo className="w-10 h-10 sm:w-11 sm:h-11 transition transform group-hover:scale-105" />
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition">
                সচেতন প্রকৌশলী সমাজ
              </h1>
              <p className="text-xs sm:text-sm font-medium text-emerald-800 mt-1">
                Sacheton Prokousholi Shomaj
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.filter(i => i.id !== 'membership').map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`relative px-2.5 py-1.5 rounded-lg text-[13px] font-semibold transition ${
                    isActive 
                      ? 'text-emerald-700 bg-emerald-50' 
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100/70'
                  }`}
                >
                  {lang === 'bn' ? item.bn : item.en}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-full animate-pulse">
                      অফিসিয়াল
                    </span>
                  )}
                </button>
              );
            })}

            {/* CTA Membership Button */}
            <button
              onClick={() => navigateTo('membership')}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white text-sm font-bold rounded-lg shadow hover:shadow-md hover:from-emerald-800 hover:to-emerald-900 transition flex items-center gap-1.5 active:scale-95"
            >
              <UserCheck className="w-4 h-4" />
              <span>{lang === 'bn' ? 'যুক্ত হোন' : 'Join Us'}</span>
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => navigateTo('membership')}
              className="px-3 py-1.5 bg-emerald-700 text-white text-xs font-bold rounded-md"
            >
              যুক্ত হোন
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                currentPage === item.id 
                  ? 'bg-emerald-700 text-white font-bold' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{lang === 'bn' ? item.bn : item.en}</span>
              <ChevronRight className={`w-4 h-4 ${currentPage === item.id ? 'text-white' : 'text-slate-400'}`} />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ==========================================
// HOME PAGE COMPONENT
// ==========================================
function HomePage({ navigateTo, lang, pressReleases, newsList, activities, setSelectedPR }) {
  return (
    <div className="space-y-10 pb-10">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white pt-8 pb-12 overflow-hidden">
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>মহান মুক্তিযুদ্ধের চেতনায় বিশ্বাসী প্রকৌশলীদের ঐক্যবদ্ধ সংগঠন</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                মুক্তিযুদ্ধের চেতনায় গড়ি <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  সমৃদ্ধ সচেতন সমাজ
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                মহান মুক্তিযুদ্ধের আদর্শে বিশ্বাসী প্রকৌশলীদের ঐক্য, পেশাগত উৎকর্ষ, নৈতিকতা এবং মানুষের কল্যাণে সম্মিলিত উদ্যোগের একটি দায়িত্বশীল জাতীয় প্ল্যাটফর্ম।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => navigateTo('about')}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/40 transition flex items-center justify-center gap-2 text-base"
                >
                  <span>আমাদের সম্পর্কে জানুন</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateTo('membership')}
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700 transition flex items-center justify-center gap-2 text-base"
                >
                  <UserCheck className="w-5 h-5 text-emerald-400" />
                  <span>সংগঠনে যুক্ত হোন</span>
                </button>
              </div>
            </div>

            {/* Visual Hero Feature Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-4 sm:p-5 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl max-w-md w-full">
                <div className="flex items-center justify-center pb-4">
                  <SPSLogo className="w-24 h-24 sm:w-28 sm:h-40" />
                </div>
                <div className="text-center space-y-2 border-t border-slate-700/80 pt-4">
                  <h3 className="text-lg font-bold text-white">সচেতন প্রকৌশলী সমাজ</h3>
                  <p className="text-xs text-emerald-400 font-mono">https://spsbangladesh.org</p>
                  <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                    ইতিহাস • সংস্কৃতি • উন্নয়ন — এই মূল সুরকে ধারণ করে সমৃদ্ধ বাংলাদেশ গঠনে নিরলস কাজ করে যাচ্ছি।
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-emerald-700 text-sm font-bold tracking-wider uppercase">আমাদের পরিচয়</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              পেশাগত সংহতি ও নৈতিকতার দীপ্ত অঙ্গীকার
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-base">
              সচেতন প্রকৌশলী সমাজ একটি আদর্শভিত্তিক সাংগঠনিক প্ল্যাটফর্ম, যার মূল লক্ষ্য মহান মুক্তিযুদ্ধের চেতনায় বিশ্বাসী প্রকৌশলীদের মধ্যে ঐক্য, পেশাগত সংহতি, নৈতিকতা এবং জনকল্যাণমূলক কার্যক্রমকে উৎসাহিত করা। প্রকৌশল জ্ঞান, দক্ষতা ও অভিজ্ঞতাকে দেশের উন্নয়ন, মানুষের কল্যাণ এবং একটি সচেতন সমাজ গঠনের কাজে ব্যবহার করাই আমাদের প্রধান লক্ষ্য।
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button 
              onClick={() => navigateTo('about')} 
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-800 transition flex items-center justify-center gap-2"
            >
              <span>বিস্তারিত জানুন</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4 IDEALS & VALUES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">মূল আদর্শ ও মূল্যবোধ</h2>
          <p className="text-slate-600">আমাদের সকল সাংগঠনিক কর্মকাণ্ড পরিচালিত হয় ৪টি মৌলিক স্তম্ভের ওপর ভিত্তি করে</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ValueCard 
            icon={<Award className="w-8 h-8 text-red-600" />}
            title="মুক্তিযুদ্ধের চেতনা"
            desc="স্বাধীনতার মূল্যবোধ, আত্ম মর্যাদা, সাম্য, মানবাধিকার এবং সামাজিক ন্যায়বিচার প্রতিষ্ঠায় অবিচল অঙ্গীকার।"
            bgHover="hover:border-red-200"
          />
          <ValueCard 
            icon={<BookOpen className="w-8 h-8 text-emerald-600" />}
            title="পেশাগত উৎকর্ষ"
            desc="প্রকৌশল জ্ঞান বৃদ্ধি, প্রযুক্তিগত উদ্ভাবন, ক্রমাগত দক্ষতা উন্নয়ন ও আন্তর্জাতিক মান অর্জনের প্রচেষ্টা।"
            bgHover="hover:border-emerald-200"
          />
          <ValueCard 
            icon={<Shield className="w-8 h-8 text-blue-600" />}
            title="নৈতিকতা ও স্বচ্ছতা"
            desc="কর্মক্ষেত্রে সর্বোচ্চ সততা, দায়িত্বশীলতা, পেশাগত কোড অফ কন্ডাক্ট এবং দুর্নীতিমুক্ত পরিবেশ নিশ্চিত করা।"
            bgHover="hover:border-blue-200"
          />
          <ValueCard 
            icon={<Users className="w-8 h-8 text-amber-600" />}
            title="জনকল্যাণ ও উন্নয়ন"
            desc="প্রকৌশলবিদ্যাকে মানব কল্যাণ, দুর্যোগ মোকাবেলা ও টেকসই জাতীয় অবকাঠামো নির্মাণে কাজে লাগানো।"
            bgHover="hover:border-amber-200"
          />
        </div>
      </section>

      {/* LATEST PRESS RELEASES (MANDATORY HOMEPAGE SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-5 gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
              <span className="text-red-700 font-bold text-sm uppercase">অফিসিয়াল বার্তা</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">সর্বশেষ প্রেস রিলিজ</h2>
          </div>
          <button 
            onClick={() => navigateTo('press-release')} 
            className="px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 font-bold text-sm rounded-lg transition flex items-center gap-1.5"
          >
            <span>সব প্রেস রিলিজ দেখুন</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pressReleases.slice(0, 3).map((pr) => (
            <div key={pr.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="h-36 overflow-hidden relative">
                  <img loading="lazy" src={pr.featuredImage} alt={pr.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    {pr.category}
                  </span>
                </div>
                <div className="p-3.5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-emerald-700 transition">
                    {pr.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {pr.summary}
                  </p>
                </div>
              </div>
              
              <div className="px-5 pb-3.5 pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => setSelectedPR(pr)}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                >
                  <span>সম্পূর্ণ পড়ুন</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST ACTIVITIES & NEWS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Recent Activities Column */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-600" />
                <span>সাম্প্রতিক কার্যক্রম</span>
              </h3>
              <button onClick={() => navigateTo('activities')} className="text-sm font-semibold text-emerald-700 hover:underline">
                সকল কার্যক্রম
              </button>
            </div>
            <div className="space-y-4">
              {activities.slice(0, 2).map((act) => (
                <div key={act.id} className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 items-center hover:border-emerald-300 transition shadow-sm">
                  <img loading="lazy" src={act.image} alt={act.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {act.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base leading-snug">{act.title}</h4>
                    <p className="text-xs text-slate-500">{act.date} • {act.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News & Notices Column */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-emerald-600" />
                <span>সংবাদ ও নোটিশ</span>
              </h3>
              <button onClick={() => navigateTo('news')} className="text-sm font-semibold text-emerald-700 hover:underline">
                সকল নোটিশ
              </button>
            </div>
            <div className="space-y-4">
              {newsList.slice(0, 2).map((news) => (
                <div key={news.id} className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 items-center hover:border-emerald-300 transition shadow-sm">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-red-800 rounded">
                      {news.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base leading-snug">{news.title}</h4>
                    <p className="text-xs text-slate-500">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MEMBERSHIP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="bg-gradient-to-r from-emerald-800 to-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-3 max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              সচেতন প্রকৌশলী সমাজের সঙ্গে যুক্ত হোন
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              আপনি কি মহান মুক্তিযুদ্ধের চেতনায় বিশ্বাসী এবং পেশাগত সমৃদ্ধি ও জাতীয় উন্নয়নে অবদান রাখতে আগ্রহী? আজই আমাদের সাথে সদস্য হিসেবে নিবন্ধন করুন।
            </p>
          </div>
          <button
            onClick={() => navigateTo('membership')}
            className="relative z-10 px-8 py-4 bg-white text-emerald-900 font-extrabold rounded-xl shadow-lg hover:bg-emerald-50 transition transform hover:-translate-y-0.5 flex-shrink-0 text-base"
          >
            সদস্যপদ আবেদন করুন
          </button>
        </div>
      </section>

    </div>
  );
}

// Helper Card Component
function ValueCard({ icon, title, desc, bgHover }) {
  return (
    <div className={`bg-white p-4 rounded-2xl border border-slate-200 shadow-sm ${bgHover} transition duration-300 hover:shadow-md flex flex-col space-y-3`}>
      <div className="p-3 bg-slate-50 rounded-xl w-fit">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// ==========================================
// ABOUT US PAGE
// ==========================================
function AboutPage({ lang, navigateTo }) {
  const objectives = [
    "মহান মুক্তিযুদ্ধের আদর্শ, মূল্যবোধ ও চেতনায় সমাজকে সুসংগঠিত করা।",
    "প্রকৌশলীদের মধ্যে পেশাগত সংহতি, আন্তঃসহযোগিতা ও ঐক্য বৃদ্ধি করা।",
    "পেশাগত নীতিশাস্ত্র, স্বচ্ছতা ও সততা উর্ধ্বে তুলে ধরা।",
    "প্রকৌশল শিক্ষা, গবেষণা, প্রযুক্তিগত উদ্ভাবন ও উন্নয়নমূলক কর্মকাণ্ডে উৎসাহ প্রদান।",
    "জ্ঞান চর্চা ও পেশাগত দক্ষতার ধারাবাহিক উন্নতির সুযোগ সৃষ্টি করা।",
    "জনকল্যাণমূলক সামাজিক উদ্যোগ ও দুর্যোগ মোকাবেলায় স্বেচ্ছাসেবক হিসেবে ভুমিকা রাখা।",
    "জাতীয় নীতি নির্ধারণী পর্যায়ে স্বাধীন ও যৌক্তিক প্রকৌশল দৃষ্টিভঙ্গি প্রদান করা।",
    "পরিবেশবান্ধব ও টেকসই আধুনিক প্রকৌশল চর্চা সুনিশ্চিত করা।"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 space-y-4">
        <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">সংগঠনের সচিত্র পরিচিতি</span>
        <h1 className="text-2xl sm:text-3xl font-black">আমাদের সম্পর্কে (About Us)</h1>
        <p className="text-slate-300 max-w-3xl text-base sm:text-base">
          সচেতন প্রকৌশলী সমাজ হলো দেশপ্রেমিক, পেশাদার এবং দায়িত্বশীল প্রকৌশলীদের একটি সমন্বিত সামাজিক ও পেশাগত প্ল্যাটফর্ম।
        </p>
      </div>

      {/* Overview & History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
            সংগঠনের প্রেক্ষাপট ও মূল দর্শন
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            সচেতন প্রকৌশলী সমাজ একটি আদর্শভিত্তিক সাংগঠনিক প্ল্যাটফর্ম। দেশের অবকাঠামোগত ও প্রযুক্তিগত উৎকর্ষ সাধনে প্রকৌশলীদের ভূমিকা অগ্রগণ্য। মহান মুক্তিযুদ্ধের চেতনাকে ধারণ করে দেশের প্রতি অনুগত থেকে মেধা ও বিবেক দিয়ে একটি আধুনিক, উন্নত ও দুর্নীতিরোধক সমাজ বিনির্মাণই আমাদের রূপরেখা।
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            আমাদের সদস্যরা সরকারি, বেসরকারি, স্বায়ত্তশাসিত সংস্থা, গবেষণা প্রতিষ্ঠান ও আন্তর্জাতিক সংস্থায় সফলতার সাথে যুক্ত থেকে পেশাগত মেধার স্বাক্ষর রেখে চলেছেন।
          </p>

          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-700" />
              <span>প্রতিষ্ঠা সংক্রান্ত ইতিহাস</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              সচেতন প্রকৌশলী সমাজের প্রতিষ্ঠার সঠিক ইতিহাস, মাইলফলক কার্যক্রম ও প্রবীণ প্রকৌশলীদের অবদান সংক্রান্ত দাপ্তরিক নথি পর্যালোচনাধীন। অনুমোদন সাপেক্ষে অফিশিয়াল তথ্য এখানে প্রকাশ করা হবে।
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <SPSLogo className="w-20 h-20 mx-auto" />
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-bold text-slate-900">অফিসিয়াল পরিচিতি</h3>
            <p className="text-xs text-slate-500 font-mono">Official Domain: https://spsbangladesh.org</p>
            <div className="text-left space-y-2 text-sm text-slate-700 border-t pt-4">
              <p><strong>ধরণ:</strong> অরাজনৈতিক পেশাজীবী সংগঠন</p>
              <p><strong>প্রধান কেন্দ্র:</strong> ঢাকা, বাংলাদেশ</p>
              <p><strong>যোগাযোগ:</strong> mail@spsbangladesh.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-emerald-900 text-white p-5 rounded-2xl space-y-4 shadow-md">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            <span>আমাদের মিশন (Mission)</span>
          </h3>
          <p className="text-emerald-100 text-base leading-relaxed">
            "মহান মুক্তিযুদ্ধের আদর্শে বিশ্বাসী প্রকৌশলীদের ঐক্যবদ্ধ করা এবং প্রকৌশল পেশার নৈতিকতা, দক্ষতা ও সামাজিক দায়বদ্ধতা বিকাশে কাজ করা।"
          </p>
        </div>

        <div className="bg-slate-800 text-white p-5 rounded-2xl space-y-4 shadow-md">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Eye className="w-6 h-6 text-red-400" />
            <span>আমাদের ভিশন (Vision)</span>
          </h3>
          <p className="text-slate-200 text-base leading-relaxed">
            "একটি সচেতন, নৈতিক, দক্ষ ও জনকল্যাণমুখী প্রকৌশলী সমাজ গঠন, যেখানে প্রকৌশল জ্ঞান ও পেশাগত অভিজ্ঞতা দেশের উন্নয়ন এবং মানুষের কল্যাণে কার্যকর ভূমিকা রাখবে।"
          </p>
        </div>
      </div>

      {/* Structured 8 Objectives */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-3">
          মূল উদ্দেশ্যসমূহ (Organizational Objectives)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((obj, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-4 shadow-sm hover:border-emerald-400 transition">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                {idx + 1}
              </span>
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed pt-0.5">{obj}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ==========================================
// IDEALS & OBJECTIVES PAGE
// ==========================================
function IdealsPage({ lang }) {
  const sections = [
    {
      title: "মুক্তিযুদ্ধের আদর্শ ও দেশপ্রেম",
      desc: "১৯৭১ সালের মহান মুক্তিযুদ্ধের স্বাধীনতাবোধ, সাম্য, মানবিক মর্যাদা ও সামাজিক ন্যায়বিচারকে পেশাগত কাজের প্রতিটি ক্ষেত্রে ধারণ করা। দেশের সার্বভৌমত্ব রক্ষা ও স্বনির্ভর বাংলাদেশ গড়া আমাদের প্রধান স্পিরিট।",
      icon: <Award className="w-8 h-8 text-red-600" />
    },
    {
      title: "পেশাগত নৈতিকতা ও সুশাসন",
      desc: "প্রকৌশল নকশা, দরপত্র প্রক্রিয়া ও প্রকল্প বাস্তবায়নে স্বচ্ছতা সুনিশ্চিত করা। দুর্নীতির বিরুদ্ধে শূন্য সহনশীলতা প্রদর্শন ও সততা বজায় রাখা।",
      icon: <Shield className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "পেশাগত সংহতি ও ভ্রাতৃত্ব",
      desc: "দেশের সিভিল, মেকানিক্যাল, ইলেকট্রিক্যাল, কম্পিউটার সহ সকল ডিসিপ্লিনের প্রকৌশলীদের মধ্যে ঐক্য স্থাপন ও পারস্পরিক সহযোগিতা বজায় রাখা।",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "গবেষণা, প্রযুক্তি ও উদ্ভাবন",
      desc: "দেশীয় কাঁচামাল ও প্রযুক্তির সর্বোচ্চ ব্যবহারে উৎসাহিত করা। চতুর্থ শিল্পবিপ্লবের সাথে সামঞ্জস্য রেখে এআই, রোবোটিক্স ও স্মার্ট গ্রিড প্রযুক্তির চর্চা।",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />
    },
    {
      title: "জনকল্যাণ ও সামাজিক দায়িত্ব",
      desc: "দুর্যোগ ঝুঁকি হ্রাস, নিরাপদ পানীয় জল সরবরাহ, স্যানিটেশন ও নিরাপদ বাসস্থানের জন্য প্রকৌশলজ্ঞান স্বেচ্ছাসেবী হিসেবে প্রয়োগ।",
      icon: <Sparkles className="w-8 h-8 text-amber-600" />
    },
    {
      title: "টেকসই পরিবেশবান্ধব উন্নয়ন",
      desc: "জলবায়ু পরিবর্তনের ঝুঁকি মোকাবেলায় কার্বন নির্গমন হ্রাস এবং গ্রিন কনস্ট্রাকশন ও নবায়নযোগ্য শক্তির প্রসারে সচেতনতা সৃষ্টি।",
      icon: <Globe className="w-8 h-8 text-teal-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-6">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">আদর্শ ও মৌলিক মূলনীতি</h2>
        <p className="text-slate-600 text-base">
          সচেতন প্রকৌশলী সমাজ-এর ভিত্তিপ্রস্তর ও আদর্শিক পথচলার বিস্তারিত বিবরণ।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((sec, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4">
            <div className="p-3 bg-slate-50 rounded-xl w-fit">{sec.icon}</div>
            <h3 className="text-lg font-bold text-slate-900">{sec.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{sec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// ACTIVITIES PAGE
// ==========================================
function ActivitiesPage({ lang, activities, setSelectedActivity }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'সেমিনার', 'ওয়ার্কশপ', 'জাতীয় দিবস'];

  const filtered = filter === 'All' ? activities : activities.filter(a => a.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">আমাদের কার্যক্রম</h1>
          <p className="text-slate-600 mt-1">সংগঠনের সেমিনার, ওয়ার্কশপ ও জনকল্যাণমুখী সকল উদ্যোগ</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                filter === cat 
                  ? 'bg-emerald-700 text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'সব কার্যক্রম' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filtered.map((act) => (
          <div key={act.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group">
            <div>
              <div className="h-36 overflow-hidden relative">
                <img loading="lazy" src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-emerald-900/90 text-white text-xs px-2.5 py-1 rounded font-medium">
                  {act.category}
                </span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {act.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {act.location}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{act.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2">{act.desc}</p>
              </div>
            </div>
            
            <div className="p-4 pt-0">
              <button
                onClick={() => setSelectedActivity(act)}
                className="w-full py-2.5 bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-bold text-sm rounded-xl transition flex items-center justify-center gap-1"
              >
                <span>বিস্তারিত দেখুন</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// NEWS & ANNOUNCEMENTS PAGE
// ==========================================
function NewsPage({ lang, newsList, setSelectedNews }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">সংবাদ ও ঘোষণা</h1>
        <p className="text-slate-600 mt-1">অফিসিয়াল নোটিশ, প্রেস বিবৃতি এবং বুলেটিন</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {newsList.map((news) => (
          <div key={news.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-red-100 text-red-800 font-semibold text-xs rounded-full">
                  {news.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{news.date}</span>
              </div>
              
              <h3 className="font-bold text-slate-900 text-base leading-snug">{news.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{news.summary}</p>
            </div>

            <button
              onClick={() => setSelectedNews(news)}
              className="mt-4 w-full py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-emerald-800 transition flex items-center justify-center gap-1"
            >
              <span>বিস্তারিত পড়ুন</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// PRESS RELEASE PAGE (DEDICATED SECTION)
// ==========================================
function PressReleasePage({ lang, pressReleases, selectedPR, setSelectedPR, showToast }) {
  const [search, setSearch] = useState('');

  const filteredPRs = pressReleases.filter(pr => 
    pr.title.toLowerCase().includes(search.toLowerCase()) || 
    pr.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-slate-900 to-slate-950 text-white p-5 sm:p-8 rounded-2xl shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-red-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
            অফিসিয়াল মিডিয়া সেকশন
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">প্রেস রিলিজ (Press Releases)</h1>
        <p className="text-slate-300 max-w-3xl text-base sm:text-base">
          সচেতন প্রকৌশলী সমাজের আনুষ্ঠানিক বক্তব্য, সংবাদ বিজ্ঞপ্তি ও মিডিয়া প্রকাশনাসমূহ।
        </p>
      </div>

      {/* Detail View Mode if Selected */}
      {selectedPR ? (
        <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden max-w-4xl mx-auto animate-fadeIn">
          {/* Official Document Banner Header */}
          <div className="bg-slate-100 border-b border-slate-300 p-4 sm:p-5 text-center space-y-3">
            <SPSLogo className="w-20 h-20 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">সচেতন প্রকৌশলী সমাজ</h2>
            <p className="text-xs text-slate-500 font-mono">https://spsbangladesh.org/press-release</p>
            <div className="inline-block px-4 py-1 bg-red-700 text-white font-bold text-xs rounded-full tracking-widest uppercase">
              অফিসিয়াল প্রেস বিজ্ঞপ্তি
            </div>
          </div>

          <div className="p-4 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between border-b pb-4 gap-4 text-sm text-slate-600">
              <span className="font-semibold text-emerald-800">প্রকাশের তারিখ: {selectedPR.date}</span>
              <span className="bg-slate-100 px-3 py-1 rounded text-xs font-mono">ID: {selectedPR.id}</span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
              {selectedPR.title}
            </h1>

            {selectedPR.featuredImage && (
              <img loading="lazy" src={selectedPR.featuredImage} alt={selectedPR.title} className="w-full h-56 object-cover rounded-xl" />
            )}

            <div className="text-slate-800 text-base sm:text-base leading-relaxed whitespace-pre-line">
              {selectedPR.content}
            </div>

            {/* Document Verification Footer */}
            <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-bold text-slate-900 text-sm">অনুমোদনক্রমে,</p>
                <p className="text-xs text-slate-600">প্রেস ও মিডিয়া বিভাগ, সচেতন প্রকৌশলী সমাজ</p>
                <p className="text-xs text-slate-500">ইমেইল: mail@spsbangladesh.org</p>
              </div>

              {/* Action Tools */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>প্রিন্ট / PDF</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t flex justify-between items-center">
              <button
                onClick={() => setSelectedPR(null)}
                className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-emerald-800 transition"
              >
                ← সকল প্রেস বিজ্ঞপ্তিতে ফিরে যান
              </button>
              
              <button
                onClick={async () => {
                  const url = window.location.href;
                  try {
                    if (navigator.share) await navigator.share({ title: selectedPR.title, url });
                    else { await navigator.clipboard.writeText(url); showToast('লিংক কপি হয়েছে'); }
                  } catch {}
                }}
                className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-700"
              >
                <Share2 className="w-4 h-4" />
                <span>শেয়ার করুন</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Press Release Archive List View */
        <div className="space-y-4">
          {/* Search Box */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="relative w-full sm:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="প্রেস রিলিজ খুঁজুন..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <span className="text-xs text-slate-500 font-mono">মোট প্রকাশিত: {filteredPRs.length} টি</span>
          </div>

          <div className="space-y-4">
            {filteredPRs.map((pr) => (
              <div key={pr.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-xs rounded-md">
                      {pr.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{pr.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 hover:text-emerald-700 transition cursor-pointer" onClick={() => setSelectedPR(pr)}>
                    {pr.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-2">{pr.summary}</p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto justify-end">
                  <button
                    onClick={() => setSelectedPR(pr)}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition"
                  >
                    সম্পূর্ণ রিলিজ পড়ুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

// ==========================================
// PUBLICATIONS & DOCUMENTS PAGE
// ==========================================
function PublicationsPage({ lang, publications }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">প্রকাশনা ও অফিশিয়াল নথিপত্র</h1>
        <p className="text-slate-600 mt-1">গঠনতন্ত্র, জার্নাল, বার্ষিক প্রতিবেদন ও গবেষণাপত্র</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {publications.map((pub) => (
          <div key={pub.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-xs rounded-md">
                {pub.category}
              </span>
              <h3 className="font-bold text-slate-900 text-base leading-snug">{pub.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pub.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>সাইজ: {pub.size}</span>
              {pub.url ? (
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-900 hover:bg-emerald-800 text-white font-bold rounded-lg transition flex items-center gap-1.5">
                  <Download className="w-4 h-4" /><span>PDF ডাউনলোড</span>
                </a>
              ) : (
                <span className="px-4 py-2 bg-slate-100 text-slate-500 font-bold rounded-lg">শীঘ্রই আসছে</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MEMBERSHIP PAGE (DYNAMIC & FULLY FUNCTIONAL)
// ==========================================
function MembershipPage({ lang, applications, setApplications, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'Civil Engineering',
    qualification: '',
    workplace: '',
    designation: '',
    category: 'সাধারণ সদস্য',
    declaration: false
  });

  const [submittedApp, setSubmittedApp] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("আবেদন জমা দেওয়ার আগে অঙ্গীকারনামায় সম্মত হতে হবে।");
      return;
    }

    const refId = `SPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp = {
      ...formData,
      id: refId,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };

    setSending(true);
    const ok = await sendForm('সদস্যপদ আবেদন: ' + newApp.name + ' (' + newApp.id + ')', newApp);
    setSending(false);
    if (!ok) { showToast('আবেদন পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।', 'error'); return; }
    setApplications([newApp, ...applications]);
    setSubmittedApp(newApp);
    showToast(FORM_ENDPOINT ? 'সদস্যপদের আবেদন সফলভাবে জমা হয়েছে!' : 'ইমেইল অ্যাপ খোলা হয়েছে — পাঠিয়ে আবেদন সম্পূর্ণ করুন।');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-8 rounded-2xl space-y-4">
        <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">সদস্যপদ প্রক্রিয়া</span>
        <h1 className="text-2xl sm:text-3xl font-black">সদস্য আবেদন পোর্টাল</h1>
        <p className="text-slate-300 max-w-3xl text-base sm:text-base">
          যোগ্য প্রকৌশলীগণ প্রয়োজনীয় তথ্য প্রদান করে সচেতন প্রকৌশলী সমাজের প্রাথমিক সদস্যপদের আবেদন জমা দিতে পারবেন।
        </p>
      </div>

      {/* Submission Success Confirmation Screen */}
      {submittedApp ? (
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-5 max-w-2xl mx-auto text-center space-y-4 shadow-xl animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h2 className="text-xl font-extrabold text-emerald-950">আবেদন সফলভাবে গৃহীত হয়েছে!</h2>
          <p className="text-slate-700 text-sm sm:text-base">
            ধন্যবাদ, <strong>{submittedApp.name}</strong>। আপনার সদস্যপদ আবেদনটি সিস্টেম রেকর্ডে সংরক্ষিত হয়েছে।
          </p>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 text-left space-y-2 font-mono text-sm">
            <p><strong>ট্র্যাকিং রেফারেন্স আইডি:</strong> <span className="text-emerald-700 font-bold text-base">{submittedApp.id}</span></p>
            <p><strong>আবেদনকারীর ইমেইল:</strong> {submittedApp.email}</p>
            <p><strong>ডিসিপ্লিন:</strong> {submittedApp.discipline}</p>
            <p><strong>আবেদনের বিভাগ:</strong> {submittedApp.category}</p>
            <p><strong>বর্তমান স্ট্যাটাস:</strong> <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">যাচাইকরণাধীন (Pending)</span></p>
          </div>

          <p className="text-xs text-slate-500">
            দাপ্তরিক যাচাই-বাছাই শেষে আপনার ইমেইল ও মোবাইল নম্বরে আপডেট জানানো হবে।
          </p>

          <button
            onClick={() => setSubmittedApp(null)}
            className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition"
          >
            নতুন আবেদন করুন
          </button>
        </div>
      ) : (
        /* Membership Rules & Application Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Eligibility Info & Rules */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-3">সদস্যপদের যোগ্যতা ও শর্তাবলী</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>বাংলাদেশী অথবা স্বীকৃত বিশ্ববিদ্যালয় হতে গ্র্যাজুয়েট প্রকৌশলী হতে হবে (B.Sc. in Engineering)।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>মহান মুক্তিযুদ্ধের চেতনা ও অখণ্ডতায় বিশ্বাসী হতে হবে।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>সংগঠনের গঠনতন্ত্র ও নীতিমালার প্রতি শ্রদ্ধা বজায় রাখতে হবে।</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-slate-900">সদস্যপদের ধরণসমূহ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ১. <strong>সাধারণ সদস্য:</strong> বার্ষিক চাঁদা প্রদানকারী স্বীকৃত প্রকৌশলী।<br />
                ২. <strong>আজীবন সদস্য:</strong> নির্ধারিত এককালীন ফি প্রদানকারী সদস্য।<br />
                ৩. <strong>ছাত্র সদস্য:</strong> শেষ বর্ষের প্রকৌশল শিক্ষার্থী (বিশেষ বিবেচনায়)।
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 border-b pb-4 mb-4">অনলাইন সদস্যপদ আবেদন ফরম</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">পূর্ণ নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: প্রকৌশলী মোহাম্মদ আলী"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">ইমেইল ঠিকানা *</label>
                  <input
                    type="email"
                    required
                    placeholder="mail@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">মোবাইল নম্বর *</label>
                  <input
                    type="tel"
                    required
                    placeholder="017xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">ইঞ্জিনিয়ারিং ডিসিপ্লিন *</label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({...formData, discipline: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm bg-white"
                  >
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical & Electronic">Electrical & Electronic</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Computer Science & Eng.">Computer Science & Eng.</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                    <option value="Architectural Eng.">Architectural Eng.</option>
                    <option value="Other Discipline">অন্যান্য ডিসিপ্লিন</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">শিক্ষাগত যোগ্যতা ও প্রতিষ্ঠান *</label>
                  <input
                    type="text"
                    required
                    placeholder="B.Sc. in CE (BUET / KUET / RUET)"
                    value={formData.qualification}
                    onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">বর্তমান কর্মস্থল *</label>
                  <input
                    type="text"
                    required
                    placeholder="প্রতিষ্ঠানের নাম"
                    value={formData.workplace}
                    onChange={(e) => setFormData({...formData, workplace: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">পদবী *</label>
                  <input
                    type="text"
                    required
                    placeholder="সহকারী প্রকৌশলী / সিইও"
                    value={formData.designation}
                    onChange={(e) => setFormData({...formData, designation: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">আবেদনের বিভাগ *</label>
                <div className="flex gap-4">
                  {['সাধারণ সদস্য', 'আজীবন সদস্য', 'ছাত্র সদস্য'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={formData.category === cat}
                        onChange={() => setFormData({...formData, category: cat})}
                        className="text-emerald-600 focus:ring-emerald-600"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.declaration}
                    onChange={(e) => setFormData({...formData, declaration: e.target.checked})}
                    className="mt-0.5 text-emerald-600 focus:ring-emerald-600 rounded"
                  />
                  <span>
                    আমি অঙ্গীকার করছি যে প্রদত্ত সকল তথ্য সত্য ও সঠিক। আমি সচেতন প্রকৌশলী সমাজের নিয়মাবলী মেনে চলতে বাধ্য থাকিব।
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 disabled:opacity-60 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base rounded-xl shadow transition"
              >
                {sending ? 'জমা হচ্ছে...' : 'আবেদন পত্র জমা দিন'}
              </button>
            </form>
          </div>

        </div>
      )}

    </div>
  );
}

// ==========================================
// GALLERY PAGE
// ==========================================
function GalleryPage({ lang }) {
  const images = [
    { title: "স্মৃতিসৌধে শ্রদ্ধা জ্ঞাপন", date: "২০২৫-১২-১৬", src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80" },
    { title: "প্রকৌশল সেমিনার ২০২৬", date: "২০২৬-০১-২০", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
    { title: "ওয়ার্কশপ সেশন", date: "২০২৫-১১-০৫", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { title: "টেকনিক্যাল প্রেজেন্টেশন", date: "২০২৫-১০-১২", src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
    { title: "প্রকৌশলীদের বার্ষিক মিলনমেলা", date: "২০২৫-০৯-১৫", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
    { title: "গবেষণা জার্নাল উন্মোচন", date: "২০২৫-০৮-২০", src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" }
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">ফটোগ্যালারি</h1>
        <p className="text-slate-600 mt-1">সংগঠনের বিভিন্ন জাতীয় দিবস, সেমিনার ও সাংগঠনিক মুহূর্ত</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveImage(img)}
            className="group relative h-44 bg-slate-200 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm"
          >
            <img loading="lazy" src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent opacity-0 group-hover:opacity-100 transition p-4 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">{img.title}</h4>
              <p className="text-xs text-slate-300">{img.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {activeImage && (
        <Modal onClose={() => setActiveImage(null)}>
          <div className="space-y-4">
            <img loading="lazy" src={activeImage.src} alt={activeImage.title} className="w-full h-64 object-cover rounded-xl" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">{activeImage.title}</h3>
              <p className="text-xs text-slate-500">{activeImage.date}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ==========================================
// CONTACT PAGE
// ==========================================
function ContactPage({ lang, showToast }) {
  const [cForm, setCForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await sendForm('যোগাযোগ: ' + cForm.subject, cForm);
    if (!ok) { showToast('বার্তা পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।', 'error'); return; }
    showToast(FORM_ENDPOINT ? 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।' : 'ইমেইল অ্যাপ খোলা হয়েছে — বার্তাটি পাঠিয়ে সম্পূর্ণ করুন।');
    setCForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">যোগাযোগ করুন (Contact Us)</h1>
        <p className="text-slate-600 mt-1">যেকোনো জিজ্ঞাসা, মতামত বা মিডিয়ার প্রয়োজনে ইমেইল করুন</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">অফিসিয়াল ইমেইল</p>
                <a href="mailto:mail@spsbangladesh.org" className="text-base font-bold text-slate-900 hover:text-emerald-700">
                  mail@spsbangladesh.org
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t pt-4">
              <div className="p-3 bg-blue-100 text-blue-800 rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">অফিসিয়াল ওয়েবসাইট</p>
                <p className="text-base font-bold text-slate-900">https://spsbangladesh.org</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t pt-4">
              <div className="p-3 bg-red-100 text-red-800 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">কেন্দ্রীয় কার্যালয়</p>
                <p className="text-sm font-semibold text-slate-800">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">বার্তা পাঠান</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">আপনার নাম *</label>
              <input
                type="text"
                required
                value={cForm.name}
                onChange={(e) => setCForm({...cForm, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">ইমেইল ঠিকানা *</label>
              <input
                type="email"
                required
                value={cForm.email}
                onChange={(e) => setCForm({...cForm, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">বিষয় *</label>
              <input
                type="text"
                required
                value={cForm.subject}
                onChange={(e) => setCForm({...cForm, subject: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">বার্তা বিবরণ *</label>
              <textarea
                rows="4"
                required
                value={cForm.message}
                onChange={(e) => setCForm({...cForm, message: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-emerald-800 text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>বার্তা জমা দিন</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// ADMIN DASHBOARD MODULE
// ==========================================
function AdminDashboard({ 
  lang, isAdminLoggedIn, setIsAdminLoggedIn, adminPass, setAdminPass,
  pressReleases, setPressReleases, applications, setApplications, newsList, setNewsList, showToast 
}) {
  const [activeTab, setActiveTab] = useState('overview');

  // Form states for creating PR
  const [newPR, setNewPR] = useState({ title: '', category: 'প্রেস বিজ্ঞপ্তি', summary: '', content: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (ADMIN_PASS && adminPass === ADMIN_PASS) {
      setIsAdminLoggedIn(true);
      showToast("এডমিন সিস্টেমে সফলভাবে লগইন হয়েছে");
    } else {
      alert("ভুল পাসওয়ার্ড!");
    }
  };

  const handleCreatePR = (e) => {
    e.preventDefault();
    const created = {
      id: `pr-${Date.now()}`,
      slug: newPR.title.toLowerCase().replace(/\s+/g, '-').slice(0, 30),
      title: newPR.title,
      date: new Date().toISOString().split('T')[0],
      summary: newPR.summary,
      content: newPR.content,
      category: newPR.category,
      featuredImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      views: 1
    };
    setPressReleases([created, ...pressReleases]);
    setNewPR({ title: '', category: 'প্রেস বিজ্ঞপ্তি', summary: '', content: '' });
    showToast("নতুন প্রেস রিলিজ সফলভাবে প্রকাশিত হয়েছে");
  };

  const updateAppStatus = (id, newStatus) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
    showToast(`আবেদন স্ট্যাটাস পরিবর্তন করা হয়েছে: ${newStatus}`);
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="max-w-md mx-auto my-20 p-5 bg-white rounded-2xl border border-slate-300 shadow-xl space-y-4 text-center">
        <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">এডমিন লগইন</h2>
          <p className="text-xs text-slate-500 mt-1">সচেতন প্রকৌশলী সমাজ কন্টেন্ট ম্যানেজমেন্ট সিস্টেম</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">পাসওয়ার্ড দিন</label>
            <input
              type="password"
              placeholder="পাসওয়ার্ড লিখুন..."
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
            
          </div>
          <button type="submit" className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition">
            প্রবেশ করুন
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-6 space-y-5">
      
      {/* Top Admin Status Bar */}
      <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            <span className="text-xs text-emerald-400 font-mono">CMS System Active</span>
          </div>
          <h1 className="text-xl font-bold">ওয়েবসাইট কন্ট্রোল প্যানেল</h1>
        </div>

        <button
          onClick={() => setIsAdminLoggedIn(false)}
          className="px-4 py-2 bg-slate-800 hover:bg-rose-900 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
        >
          <LogOut className="w-4 h-4" />
          <span>লগআউট</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-2 overflow-x-auto">
        {[
          { id: 'overview', label: 'ওভারভিউ' },
          { id: 'press', label: 'প্রেস রিলিজ ম্যানেজমেন্ট' },
          { id: 'membership', label: 'সদস্য আবেদনপত্র' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-5 py-3 font-bold text-sm border-b-2 transition whitespace-nowrap ${
              activeTab === t.id 
                ? 'border-emerald-700 text-emerald-800 bg-emerald-50/50' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW METRICS */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase">মোট প্রেস রিলিজ</p>
            <p className="text-2xl font-black text-slate-900">{pressReleases.length}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase">নতুন সদস্য আবেদন</p>
            <p className="text-2xl font-black text-emerald-700">{applications.length}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase">ওয়েবসাইট স্ট্যাটাস</p>
            <p className="text-2xl font-black text-blue-600">অনলাইন (Live)</p>
          </div>
        </div>
      )}

      {/* TAB 2: PRESS RELEASE MANAGER */}
      {activeTab === 'press' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* PR Create Form */}
          <div className="lg:col-span-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Plus className="w-5 h-5 text-emerald-700" />
              <span>নতুন প্রেস রিলিজ তৈরি করুন</span>
            </h3>

            <form onSubmit={handleCreatePR} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">শিরোনাম *</label>
                <input
                  type="text"
                  required
                  placeholder="বিজ্ঞপ্তির শিরোনাম..."
                  value={newPR.title}
                  onChange={(e) => setNewPR({ ...newPR, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ক্যাটাগরি</label>
                <select
                  value={newPR.category}
                  onChange={(e) => setNewPR({ ...newPR, category: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border text-sm bg-white"
                >
                  <option value="প্রেস বিজ্ঞপ্তি">প্রেস বিজ্ঞপ্তি</option>
                  <option value="অফিসিয়াল বক্তব্য">অফিসিয়াল বক্তব্য</option>
                  <option value="নীতিমালা">নীতিমালা</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">সংক্ষিপ্ত সারসংক্ষেপ *</label>
                <textarea
                  rows="2"
                  required
                  value={newPR.summary}
                  onChange={(e) => setNewPR({ ...newPR, summary: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">মূল বিবরণ *</label>
                <textarea
                  rows="5"
                  required
                  value={newPR.content}
                  onChange={(e) => setNewPR({ ...newPR, content: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border text-sm"
                ></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-emerald-700 text-white font-bold rounded-xl text-sm">
                পাবলিশ করুন
              </button>
            </form>
          </div>

          {/* PR Management Table */}
          <div className="lg:col-span-7 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto space-y-4">
            <h3 className="text-base font-bold text-slate-900">প্রকাশিত প্রেস রিলিজ তালিকা</h3>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b bg-slate-50 text-slate-600">
                  <th className="p-3">তারিখ</th>
                  <th className="p-3">শিরোনাম</th>
                  <th className="p-3 text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {pressReleases.map((pr) => (
                  <tr key={pr.id} className="border-b hover:bg-slate-50">
                    <td className="p-3 text-xs font-mono">{pr.date}</td>
                    <td className="p-3 font-semibold text-slate-800 line-clamp-1">{pr.title}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setPressReleases(pressReleases.filter(p => p.id !== pr.id))}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: MEMBERSHIP APPLICATIONS */}
      {activeTab === 'membership' && (
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto space-y-4">
          <h3 className="text-base font-bold text-slate-900">প্রাপ্ত সদস্যপদের আবেদন তালিকা</h3>
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-600">
                <th className="p-3">আইডি</th>
                <th className="p-3">নাম ও ডিসিপ্লিন</th>
                <th className="p-3">যোগাযোগ</th>
                <th className="p-3">ক্যাটাগরি</th>
                <th className="p-3">স্ট্যাটাস</th>
                <th className="p-3 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-slate-50">
                  <td className="p-3 font-mono text-xs font-bold text-emerald-800">{app.id}</td>
                  <td className="p-3">
                    <p className="font-bold text-slate-900">{app.name}</p>
                    <p className="text-xs text-slate-500">{app.discipline}</p>
                  </td>
                  <td className="p-3 text-xs">
                    <p>{app.email}</p>
                    <p className="text-slate-500">{app.phone}</p>
                  </td>
                  <td className="p-3 text-xs font-medium">{app.category}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                      app.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
                      app.status === 'Rejected' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3 text-right space-x-1">
                    <button
                      onClick={() => updateAppStatus(app.id, 'Approved')}
                      className="px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded"
                    >
                      অনুমোদন
                    </button>
                    <button
                      onClick={() => updateAppStatus(app.id, 'Rejected')}
                      className="px-2.5 py-1 bg-rose-600 text-white text-xs font-bold rounded"
                    >
                      বাতিল
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

// ==========================================
// FOOTER COMPONENT
// ==========================================
const POLICY_DOCS = {
  privacy: { t: 'গোপনীয়তা নীতি', b: 'সদস্যদের তথ্যের সুরক্ষা নিশ্চিত করা হয়।' },
  terms: { t: 'ব্যবহারের শর্তাবলী', b: 'অফিশিয়াল তথ্যের সঠিক ব্যবহার নিশ্চিত করুন।' }
};

function Footer({ navigateTo, lang }) {
  const [doc, setDoc] = useState(null);
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <SPSLogo className="w-12 h-12" />
              <div>
                <h3 className="text-base font-extrabold text-white">সচেতন প্রকৌশলী সমাজ</h3>
                <p className="text-xs text-emerald-400">Sacheton Prokousholi Shomaj</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              মহান মুক্তিযুদ্ধের আদর্শে বিশ্বাসী প্রকৌশলীদের ঐক্য, পেশাগত সততা, দুর্নীতিমুক্ত কর্ম পরিবেশ ও সমৃদ্ধ বাংলাদেশ গড়ার দায়িত্বশীল জাতীয় সংগঠন।
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigateTo('about')} className="hover:text-emerald-400 transition">আমাদের সম্পর্কে</button></li>
              <li><button onClick={() => navigateTo('ideals')} className="hover:text-emerald-400 transition">আদর্শ ও উদ্দেশ্য</button></li>
              <li><button onClick={() => navigateTo('activities')} className="hover:text-emerald-400 transition">সংগঠনের কার্যক্রম</button></li>
              <li><button onClick={() => navigateTo('press-release')} className="hover:text-emerald-400 transition">অফিসিয়াল প্রেস রিলিজ</button></li>
              <li><button onClick={() => navigateTo('publications')} className="hover:text-emerald-400 transition">গঠনতন্ত্র ও প্রকাশনা</button></li>
              <li><button onClick={() => navigateTo('membership')} className="hover:text-emerald-400 transition">সদস্যপদ অনলাইন ফরম</button></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">যোগাযোগের ঠিকানা</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>mail@spsbangladesh.org</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>https://spsbangladesh.org</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>ঢাকা, বাংলাদেশ</span>
              </p>
            </div>
          </div>

          {/* Col 4: Domain Banner */}
          <div className="space-y-3 bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-bold text-emerald-400 uppercase">অফিসিয়াল ওয়েব প্ল্যাটফর্ম</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              সংগঠনের অনুমোদিত সংবাদ, প্রেস বিজ্ঞপ্তি ও সদস্য সহায়তার জন্য সর্বদা অফিসিয়াল ডোমেইন ব্যবহার করুন।
            </p>
            <p className="font-mono text-xs text-emerald-300 font-bold">https://spsbangladesh.org</p>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© ২০২৬ সচেতন প্রকৌশলী সমাজ (Sacheton Prokousholi Shomaj)। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-4">
            <button onClick={() => setDoc('privacy')} className="hover:text-slate-300">গোপনীয়তা নীতি</button>
            <button onClick={() => setDoc('terms')} className="hover:text-slate-300">ব্যবহারের শর্তাবলী</button>
          </div>
        </div>
      </div>
      {doc && (
        <Modal onClose={() => setDoc(null)}>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{POLICY_DOCS[doc].t}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{POLICY_DOCS[doc].b}</p>
        </Modal>
      )}
    </footer>
  );
}

// ==========================================
// GENERIC MODAL COMPONENT
// ==========================================
function Modal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl p-4 sm:p-5 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}