/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import {
  MessageSquare,
  ExternalLink,
  Copy,
  Check,
  Upload,
  RotateCcw,
  ArrowUpRight,
  Building2,
} from 'lucide-react';
import { MountJuniperLogo } from './components/MountJuniperLogo';
import {
  CLINIC_CONTENT,
  CLINIC_PHONE_RAW,
  CLINIC_PHONE_DISPLAY,
  DR_TONG_LINKEDIN,
  Language,
} from './data/clinicContent';

const DEFAULT_DR_PORTRAIT = '/src/assets/images/dr_tong_official.png';
const HERO_SUITE_IMAGE = '/src/assets/images/hero_perioperative_suite_1790926807899.jpg';
const STORAGE_KEY_CUSTOM_PORTRAIT = 'mount_juniper_dr_tong_portrait_v2';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = CLINIC_CONTENT[lang];

  // Portrait photo state (defaults to generated studio portrait, allows optional local file upload)
  const [customPortrait, setCustomPortrait] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_CUSTOM_PORTRAIT);
    } catch {
      return null;
    }
  });
  const [portraitError, setPortraitError] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Pre-Anaesthesia Preparation active step
  const [activePrepIdx, setActivePrepIdx] = useState<number>(0);

  // WhatsApp Booking Composer state
  const [callerType, setCallerType] = useState<'patient' | 'clinic'>('patient');
  const [senderName, setSenderName] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('Thomson Medical Centre');
  const [procedureDate, setProcedureDate] = useState('');
  const [procedureType, setProcedureType] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomPortrait(reader.result);
        setPortraitError(false);
        try {
          localStorage.setItem(STORAGE_KEY_CUSTOM_PORTRAIT, reader.result);
        } catch {
          // Ignore storage quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetPortrait = () => {
    setCustomPortrait(null);
    setPortraitError(false);
    try {
      localStorage.removeItem(STORAGE_KEY_CUSTOM_PORTRAIT);
    } catch {
      // Ignore storage errors
    }
  };

  const handleSelectHospitalForBooking = (hospitalName: string) => {
    setSelectedHospital(hospitalName);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build structured WhatsApp message in the currently selected language
  const buildWhatsappMessage = (): string => {
    if (lang === 'zh') {
      const roleText =
        callerType === 'patient' ? '患者/家属预约咨询' : '外科诊所手术麻醉协调';
      const lines = [
        `您好 锺前俊医生 (Dr Tong Qian Jun) / 俊岭医疗 (Mount Juniper Medical)：`,
        `联络类型：${roleText}`,
        senderName.trim() ? `姓名/诊所：${senderName.trim()}` : null,
        selectedHospital ? `拟定私立医院：${selectedHospital}` : null,
        procedureDate ? `预计手术/咨询日期：${procedureDate}` : null,
        procedureType.trim() ? `手术或麻醉项目：${procedureType.trim()}` : null,
        clinicalNotes.trim() ? `补充说明：${clinicalNotes.trim()}` : null,
      ].filter(Boolean);
      return lines.join('\n');
    }

    const roleText =
      callerType === 'patient'
        ? 'Patient Pre-Anaesthesia Enquiry'
        : 'Surgeon / Clinic Theatre Booking';
    const lines = [
      `Dear Dr Tong / Mount Juniper Medical Pte Ltd,`,
      `Enquiry Type: ${roleText}`,
      senderName.trim() ? `Name / Clinic: ${senderName.trim()}` : null,
      selectedHospital ? `Hospital: ${selectedHospital}` : null,
      procedureDate ? `Planned Date: ${procedureDate}` : null,
      procedureType.trim() ? `Procedure / Anaesthesia: ${procedureType.trim()}` : null,
      clinicalNotes.trim() ? `Notes: ${clinicalNotes.trim()}` : null,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const whatsappMessage = buildWhatsappMessage();
  const whatsappUrl = `https://wa.me/${CLINIC_PHONE_RAW}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const directWhatsappUrl = `https://wa.me/${CLINIC_PHONE_RAW}`;

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const activePortraitSrc = customPortrait || DEFAULT_DR_PORTRAIT;

  return (
    <div id="top" className="min-h-screen bg-[#F9FBFA] text-[#14201D] flex flex-col selection:bg-[#007A65]/15 selection:text-[#0B3B31]">
      {/* Top Bar Contract: Strictly 3 zones (Single-element Brand Wordmark, 5 Nav Links, 2 Actions) */}
      <header className="sticky top-0 z-40 bg-[#F9FBFA]/95 backdrop-blur-md border-b border-[#DCE6E2] px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0B3B31] font-display whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#007A65]"
        >
          Mount Juniper Medical
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#485B56]"
        >
          <a
            href="#services"
            className="hover:text-[#007A65] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
          >
            {t.nav.services}
          </a>
          <a
            href="#doctor"
            className="hover:text-[#007A65] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
          >
            {t.nav.doctor}
          </a>
          <a
            href="#hospitals"
            className="hover:text-[#007A65] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
          >
            {t.nav.hospitals}
          </a>
          <a
            href="#preparation"
            className="hover:text-[#007A65] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
          >
            {t.prepSection.kicker}
          </a>
          <a
            href="#booking"
            className="hover:text-[#007A65] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap"
          >
            {t.nav.booking}
          </a>
        </nav>

        {/* Zone 3: Language Switcher + Primary WhatsApp Action */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language Switcher"
            className="flex items-center p-0.5 bg-[#E9F1EE] border border-[#D2E0DB] rounded-lg"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#0B3B31] shadow-xs'
                  : 'text-[#485B56] hover:text-[#14201D]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                lang === 'zh'
                  ? 'bg-white text-[#0B3B31] shadow-xs'
                  : 'text-[#485B56] hover:text-[#14201D]'
              }`}
            >
              中文
            </button>
          </div>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#007A65] hover:bg-[#00604F] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007A65]"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">{t.nav.whatsappCta}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* SECTION 1: HERO & BRAND MOTTO SHOWCASE */}
        <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 px-6 lg:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Proposition & Motto */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#485B56] mb-4">
                <span className="font-medium text-[#007A65]">{t.hero.kicker}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.mottoLatin}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.mottoChinese}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-[#0B3B31] leading-[1.12] tracking-tight font-display">
                {t.hero.headline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#394A45] leading-relaxed max-w-[65ch]">
                {t.hero.description}
              </p>

              {/* Single Primary CTA + Quiet Secondary Link */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#007A65] hover:bg-[#00604F] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>{t.hero.primaryCta}</span>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-[#0B3B31] border border-[#C6D6D0] hover:border-[#007A65] hover:bg-[#F0F5F3] rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>

              {/* Principal Specialist Hero Portrait Card + Verified Key Facts */}
              <div className="mt-8 pt-6 border-t border-[#DCE6E2] flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="#doctor"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-[#DCE6E2] bg-white shrink-0 shadow-xs block"
                >
                  <img
                    src={activePortraitSrc}
                    alt="Dr Tong Qian Jun — Consultant Anaesthesiologist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 flex-1">
                  {t.hero.keyFacts.map((fact, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs text-[#596D67]">{fact.label}</span>
                      <span className="mt-1 text-sm font-semibold text-[#14201D] font-mono-num">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Official Uploaded Brand & Motto Card + Perioperative Visual */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Official Brand Card Recreation from Uploaded Image 1 */}
              <MountJuniperLogo
                variant="brand-card"
                className="rounded-xl shadow-xs"
              />

              {/* Perioperative Suite Architectural Image with Measured Scrim */}
              <div className="relative rounded-xl overflow-hidden border border-[#DCE6E2] aspect-16/9 bg-[#0B3B31]">
                {!heroImgError ? (
                  <img
                    src={HERO_SUITE_IMAGE}
                    alt="Modern private hospital perioperative and anaesthesia suite in Singapore"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B3B31] via-[#006856] to-[#14201D] flex items-center justify-center p-6">
                    <MountJuniperLogo variant="mark" className="w-20 h-16 opacity-40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <p className="text-xs text-[#E6DEC3] font-medium">
                    {t.hero.mottoLatin} · {t.hero.mottoChinese}
                  </p>
                  <p className="text-sm text-white font-medium mt-0.5">
                    {t.hero.mottoMeaning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CORE ANAESTHESIA SERVICES */}
        <section
          id="services"
          className="py-12 sm:py-16 lg:py-24 bg-[#F0F5F3] border-y border-[#DCE6E2]"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#007A65] font-medium">
                <span>{t.servicesSection.kicker}</span>
                <span aria-hidden="true">·</span>
                <span>Mount Juniper Medical</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B3B31] font-display">
                {t.servicesSection.title}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#485B56] leading-relaxed">
                {t.servicesSection.description}
              </p>
            </div>

            {/* Mobile-Friendly Grid of Numbered Services */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              {t.servicesSection.items.map((service, index) => {
                const spanClass =
                  index === 0
                    ? 'lg:col-span-7'
                    : index === 1
                    ? 'lg:col-span-5'
                    : 'lg:col-span-4';

                return (
                  <article
                    key={service.number}
                    className={`${spanClass} bg-white border border-[#DCE6E2] rounded-xl p-5 sm:p-7 flex flex-col justify-between hover:border-[#007A65]/40 transition-colors shadow-2xs`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 border-b border-[#EBF1EE] pb-3">
                        <span className="text-base sm:text-lg font-bold text-[#007A65] font-mono-num">
                          {service.number}
                        </span>
                        <span className="text-xs text-[#596D67] text-right font-medium">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#14201D] leading-snug">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-[#485B56] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#EBF1EE]">
                      <ul className="space-y-2 text-xs sm:text-sm text-[#394A45]">
                        {service.clinicalFocus.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="text-[#007A65] font-bold text-base leading-none select-none mt-0.5"
                            >
                              ✓
                            </span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: DR TONG QIAN JUN — VERIFIED SPECIALIST PROFILE */}
        <section id="doctor" className="py-16 lg:py-24 max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Doctor Portrait Card & Verified Links */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-white border border-[#DCE6E2] rounded-xl overflow-hidden">
                <div className="aspect-square w-full bg-[#F2F4F3] relative overflow-hidden">
                  {!portraitError ? (
                    <img
                      src={activePortraitSrc}
                      alt="Dr Tong Qian Jun — Principal Consultant Anaesthesiologist, Mount Juniper Medical Pte Ltd"
                      referrerPolicy="no-referrer"
                      onError={() => setPortraitError(true)}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#EBF1EE] to-[#DCE6E2]">
                      <MountJuniperLogo variant="mark" className="w-20 h-16 mb-4" />
                      <p className="text-base font-semibold text-[#0B3B31]">
                        Dr Tong Qian Jun
                      </p>
                      <p className="text-xs text-[#485B56] mt-1">
                        MBBS (Singapore), MMed (Anaesthesiology)
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <div className="text-xs text-[#007A65] font-medium">
                    {t.doctorSection.kicker}
                  </div>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-[#0B3B31] font-display">
                    {t.doctorSection.name}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#485B56]">
                    {t.doctorSection.qualificationsLine}
                  </p>

                  {/* Direct Verified LinkedIn Link & WhatsApp Link */}
                  <div className="mt-5 pt-5 border-t border-[#EBF1EE] flex flex-col gap-2.5">
                    <a
                      href={DR_TONG_LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-medium text-[#0B3B31] bg-[#F0F5F3] hover:bg-[#E2ECE8] rounded-lg transition-colors duration-150"
                    >
                      <span>{t.doctorSection.linkedinLabel}</span>
                      <ExternalLink className="w-4 h-4 text-[#007A65] shrink-0" />
                    </a>

                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#007A65] hover:bg-[#00604F] rounded-lg transition-colors duration-150"
                    >
                      <span>WhatsApp: {CLINIC_PHONE_DISPLAY}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>

                  {/* Optional Local Portrait File Uploader so Clinic Admin can drop in exact local image */}
                  <div className="mt-4 pt-4 border-t border-[#EBF1EE] flex flex-wrap items-center justify-between gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePortraitUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 text-xs text-[#485B56] hover:text-[#007A65] transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{t.doctorSection.updatePhotoLabel}</span>
                    </button>

                    {customPortrait && (
                      <button
                        type="button"
                        onClick={handleResetPortrait}
                        className="inline-flex items-center gap-1 text-xs text-[#8F7C49] hover:text-[#14201D] transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{t.doctorSection.resetPhotoLabel}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Biography, Academic Appointments & Sub-Specialty Interests */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#007A65] font-medium">
                <span>{t.doctorSection.role}</span>
              </div>

              <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#0B3B31] font-display">
                {t.doctorSection.name}
              </h3>

              <div className="mt-5 space-y-4 text-base text-[#394A45] leading-relaxed">
                {t.doctorSection.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Sub-Specialty Clinical Interests (Unboxed Typographic List) */}
              <div className="mt-8 pt-6 border-t border-[#DCE6E2]">
                <h4 className="text-sm font-semibold text-[#14201D]">
                  {t.doctorSection.interestsTitle}
                </h4>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#007A65] font-medium">
                  {t.doctorSection.interests.map((interest, idx) => (
                    <React.Fragment key={idx}>
                      <span>{interest}</span>
                      {idx < t.doctorSection.interests.length - 1 && (
                        <span aria-hidden="true" className="text-[#9AB0A9]">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Verified Academic & Clinical Appointments Table */}
              <div className="mt-8 pt-6 border-t border-[#DCE6E2]">
                <h4 className="text-sm font-semibold text-[#14201D] mb-4">
                  {t.doctorSection.credentialsTitle}
                </h4>
                <div className="divide-y divide-[#DCE6E2] border-y border-[#DCE6E2]">
                  {t.doctorSection.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline"
                    >
                      <span className="sm:col-span-3 text-xs font-medium text-[#596D67] font-mono-num">
                        {cred.period}
                      </span>
                      <div className="sm:col-span-9 flex flex-col">
                        <span className="text-sm font-semibold text-[#14201D]">
                          {cred.institution}
                        </span>
                        <span className="text-xs sm:text-sm text-[#485B56] mt-0.5">
                          {cred.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MAJOR PRIVATE HOSPITALS SERVED IN SINGAPORE */}
        <section
          id="hospitals"
          className="py-12 sm:py-16 lg:py-24 bg-white border-y border-[#DCE6E2]"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#007A65] font-medium">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{t.hospitalsSection.kicker}</span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B3B31] font-display">
                  {t.hospitalsSection.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#485B56] leading-relaxed">
                  {t.hospitalsSection.description}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#596D67] max-w-md lg:text-right">
                {t.hospitalsSection.schedulingNote}
              </p>
            </div>

            {/* Mobile-Friendly Hospital Selector Grid */}
            <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {t.hospitalsSection.hospitals.map((hosp, idx) => {
                const isSelected = selectedHospital === hosp.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectHospitalForBooking(hosp.name)}
                    className={`text-left rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer active:scale-[0.99] border ${
                      isSelected
                        ? 'border-[#007A65] bg-[#F0F5F3] ring-2 ring-[#007A65]/20 shadow-xs'
                        : 'border-[#DCE6E2] bg-[#F9FBFA] hover:border-[#007A65]/40 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-[#007A65] bg-white border border-[#DCE6E2] px-2 py-0.5 rounded-md">
                          {hosp.area}
                        </span>
                        <span className="text-[#596D67] font-mono-num font-medium">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base sm:text-lg font-semibold text-[#0B3B31] leading-snug">
                        {hosp.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-[#485B56] leading-relaxed">
                        {hosp.accreditationNote}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E4ECE9] flex items-center justify-between text-xs">
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[#007A65]">
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Selected for Booking' : '已选择预约'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-medium text-[#485B56] group-hover:text-[#007A65]">
                          <span>{lang === 'en' ? 'Tap to Select' : '点击选择'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                      <span className="text-[11px] text-[#596D67]">
                        {lang === 'en' ? 'WhatsApp' : '微信/WhatsApp'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Mobile Action Hint */}
            <div className="mt-5 p-3.5 sm:p-4 bg-[#F9FBFA] border border-[#DCE6E2] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#485B56]">
              <span>
                {lang === 'en'
                  ? 'Have a scheduled procedure at another private hospital or day surgery suite?'
                  : '需要在其他私立医院或日间手术中心安排麻醉？'}
              </span>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#007A65] hover:underline shrink-0"
              >
                <span>{lang === 'en' ? 'Enquire via WhatsApp (+65 9780 8422)' : 'WhatsApp 咨询专线 (+65 9780 8422)'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRE-OPERATIVE PREPARATION GUIDE */}
        <section
          id="preparation"
          className="py-16 lg:py-24 max-w-[1280px] mx-auto px-6 lg:px-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#8F7C49] font-medium">
              <span>{t.prepSection.kicker}</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#0B3B31] font-display">
              {t.prepSection.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#485B56] leading-relaxed">
              {t.prepSection.description}
            </p>
          </div>

          {/* Interactive Step Selector Tabs */}
          <div className="mt-8 flex flex-wrap gap-1.5 p-1 bg-[#E9F1EE] rounded-lg border border-[#D2E0DB] max-w-2xl">
            {t.prepSection.steps.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePrepIdx(idx)}
                className={`flex-1 min-w-[70px] px-3 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activePrepIdx === idx
                    ? 'bg-white text-[#0B3B31] shadow-xs'
                    : 'text-[#485B56] hover:text-[#14201D]'
                }`}
              >
                {step.phase}
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          {t.prepSection.steps[activePrepIdx] && (
            <div className="mt-4 bg-white border border-[#DCE6E2] rounded-xl p-6 sm:p-8 max-w-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#007A65] font-medium">
                  <span>{t.prepSection.steps[activePrepIdx].phase}</span>
                  <span className="font-mono-num">
                    {t.prepSection.steps[activePrepIdx].timeframe}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#0B3B31]">
                  {t.prepSection.steps[activePrepIdx].title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#394A45] leading-relaxed">
                  {t.prepSection.steps[activePrepIdx].guidance}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBF1EE] flex items-center justify-between text-xs text-[#596D67]">
                <span>
                  {lang === 'en'
                    ? `Step ${activePrepIdx + 1} of ${t.prepSection.steps.length}`
                    : `第 ${activePrepIdx + 1} / ${t.prepSection.steps.length} 步`}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActivePrepIdx((prev) => (prev + 1) % t.prepSection.steps.length)
                  }
                  className="font-semibold text-[#007A65] hover:underline cursor-pointer"
                >
                  {lang === 'en' ? 'Next Preparation Step →' : '下一步术前准备 →'}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 6: INTERACTIVE WHATSAPP APPOINTMENT BOOKING (+65 9780 8422) */}
        <section
          id="booking"
          className="py-16 lg:py-24 bg-[#0B3B31] text-white border-t border-[#1A4E43]"
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Direct Contact Info & Brand Motto */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs sm:text-sm text-[#D8CCA3] font-medium">
                    {t.bookingSection.kicker}
                  </span>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white font-display tracking-wide">
                    {t.bookingSection.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-[#D7E4E0] leading-relaxed">
                    {t.bookingSection.subtitle}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/15">
                    <span className="text-xs text-[#B6CCC5]">
                      {t.bookingSection.directContactLabel}
                    </span>
                    <div className="mt-1.5 flex items-baseline gap-3">
                      <a
                        href={directWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl sm:text-3xl font-semibold text-[#E6DEC3] hover:underline font-mono-num"
                      >
                        {t.bookingSection.whatsappNumberDisplay}
                      </a>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm text-[#B6CCC5] leading-relaxed">
                      {t.bookingSection.hoursNotice}
                    </p>
                  </div>
                </div>

                {/* Motto Lockup */}
                <div className="mt-10 pt-6 border-t border-white/15">
                  <p className="text-sm font-medium text-[#E6DEC3]">
                    Mons Jugis Magn
                  </p>
                  <p className="text-base font-medium text-white mt-0.5 tracking-wider">
                    俊岭医疗, 俊誉可靠, 腾愈安康
                  </p>
                  <p className="text-xs text-[#9AB8AF] mt-2">
                    Mount Juniper Medical Pte Ltd · Singapore
                  </p>
                </div>
              </div>

              {/* Right Column: Structured WhatsApp Appointment Message Builder */}
              <div className="lg:col-span-7 bg-white text-[#14201D] rounded-xl p-6 sm:p-9">
                {/* Segmented Control for Patient vs Surgical Clinic Coordinator */}
                <div>
                  <label className="block text-xs font-semibold text-[#485B56] mb-2">
                    {t.bookingSection.form.callerTypeLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F0F5F3] rounded-lg border border-[#DCE6E2]">
                    <button
                      type="button"
                      onClick={() => setCallerType('patient')}
                      className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap truncate ${
                        callerType === 'patient'
                          ? 'bg-[#007A65] text-white'
                          : 'text-[#485B56] hover:text-[#14201D]'
                      }`}
                    >
                      {t.bookingSection.form.callerTypes.patient}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCallerType('clinic')}
                      className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap truncate ${
                        callerType === 'clinic'
                          ? 'bg-[#007A65] text-white'
                          : 'text-[#485B56] hover:text-[#14201D]'
                      }`}
                    >
                      {t.bookingSection.form.callerTypes.clinic}
                    </button>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold text-[#485B56] mb-1.5"
                    >
                      {t.bookingSection.form.nameLabel}
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={t.bookingSection.form.namePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9FBFA] border border-[#C6D6D0] rounded-lg focus:outline-none focus:border-[#007A65]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-hospital"
                      className="block text-xs font-semibold text-[#485B56] mb-1.5"
                    >
                      {t.bookingSection.form.hospitalLabel}
                    </label>
                    <select
                      id="booking-hospital"
                      value={selectedHospital}
                      onChange={(e) => setSelectedHospital(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9FBFA] border border-[#C6D6D0] rounded-lg focus:outline-none focus:border-[#007A65]"
                    >
                      {t.hospitalsSection.hospitals.map((h, i) => (
                        <option key={i} value={h.name}>
                          {h.name}
                        </option>
                      ))}
                      <option value="Other Private Hospital / Day Surgery Centre">
                        {lang === 'en'
                          ? 'Other Major Private Hospital (Singapore)'
                          : '其他新加坡私立医院 / 日间手术中心'}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold text-[#485B56] mb-1.5"
                    >
                      {t.bookingSection.form.dateLabel}
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={procedureDate}
                      onChange={(e) => setProcedureDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9FBFA] border border-[#C6D6D0] rounded-lg focus:outline-none focus:border-[#007A65] font-mono-num"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-procedure"
                      className="block text-xs font-semibold text-[#485B56] mb-1.5"
                    >
                      {t.bookingSection.form.procedureLabel}
                    </label>
                    <input
                      id="booking-procedure"
                      type="text"
                      value={procedureType}
                      onChange={(e) => setProcedureType(e.target.value)}
                      placeholder={t.bookingSection.form.procedurePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F9FBFA] border border-[#C6D6D0] rounded-lg focus:outline-none focus:border-[#007A65]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-[#485B56] mb-1.5"
                  >
                    {t.bookingSection.form.notesLabel}
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={clinicalNotes}
                    onChange={(e) => setClinicalNotes(e.target.value)}
                    placeholder={t.bookingSection.form.notesPlaceholder}
                    className="w-full px-3.5 py-2 text-sm bg-[#F9FBFA] border border-[#C6D6D0] rounded-lg focus:outline-none focus:border-[#007A65]"
                  />
                </div>

                {/* Live WhatsApp Message Preview */}
                <div className="mt-5 p-4 bg-[#F0F5F3] border border-[#DCE6E2] rounded-lg">
                  <div className="flex items-center justify-between text-xs text-[#485B56] mb-1.5">
                    <span className="font-semibold">
                      {t.bookingSection.form.previewLabel}
                    </span>
                    <span className="font-mono-num">{CLINIC_PHONE_DISPLAY}</span>
                  </div>
                  <pre className="text-xs text-[#14201D] whitespace-pre-wrap font-sans leading-relaxed">
                    {whatsappMessage}
                  </pre>
                </div>

                {/* Primary Launch WhatsApp Link + Copy Text Fallback */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[220px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#007A65] hover:bg-[#00604F] rounded-lg transition-colors duration-150 whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>{t.bookingSection.form.sendWhatsappBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#0B3B31] bg-[#F0F5F3] hover:bg-[#E2ECE8] border border-[#C6D6D0] rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#007A65]" />
                        <span>{t.bookingSection.form.copiedConfirmation}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#485B56]" />
                        <span>{t.bookingSection.form.copyMessageBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-[#F9FBFA] border-t border-[#DCE6E2] py-12 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <MountJuniperLogo variant="lockup" />

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#485B56]">
              <a href="#services" className="hover:text-[#007A65] transition-colors">
                {t.nav.services}
              </a>
              <a href="#doctor" className="hover:text-[#007A65] transition-colors">
                {t.nav.doctor}
              </a>
              <a href="#hospitals" className="hover:text-[#007A65] transition-colors">
                {t.nav.hospitals}
              </a>
              <a href={DR_TONG_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[#007A65] transition-colors">
                LinkedIn
              </a>
              <a href={directWhatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007A65] hover:underline font-mono-num">
                WhatsApp {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E4ECE9] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#596D67]">
            <p className="max-w-3xl leading-relaxed">{t.footer.disclaimer}</p>
            <p className="whitespace-nowrap shrink-0">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
