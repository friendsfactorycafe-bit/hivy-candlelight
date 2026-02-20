'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();
  
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning romantic setups designed to make your celebration unforgettable
          </p>
          <div className="mt-6">
            <FFCBookNowButton pageTitle="Packages Page" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-amber-200 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-rose-900 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-rose-900 transition-colors leading-tight">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-base sm:text-lg md:text-xl font-bold text-rose-900">
                      {formatPrice(pkg.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Package</h2>
            <p className="text-gray-600">All our packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your evening" },
              { icon: "🍰", title: "Celebration Cake", desc: "Complimentary cake included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies throughout" },
              { icon: "🕯️", title: "Candle Setup", desc: "Warm candlelight ambiance" },
              { icon: "🎈", title: "Decorations", desc: "Beautiful thematic decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Choosing the Perfect Candle Light Dinner Package in Surat
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Selecting the right candle light dinner package at HIVY depends on the occasion you are celebrating, the ambiance you prefer, and the experience you want to create for your partner. Each of our five packages has been thoughtfully designed with a unique aesthetic, mood, and set of inclusions to ensure every celebration feels truly special and one-of-a-kind.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Swing of LOVE — ₹5,100</h3>
            <p>
              Our Swing of LOVE package is perfect for couples looking for a dreamy, whimsical candle light dinner experience. Featuring a beautifully decorated swing seating area surrounded by fairy lights, candles, and rose petals, this setup is ideal for date nights, small birthday celebrations, and simply spending quality time with your partner in a magical setting. The package includes 3 hours of private time, welcome drinks, a multi-course gourmet meal, celebration cake, and romantic background music.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">BoHo Chic — ₹5,700</h3>
            <p>
              For couples who love a rustic, bohemian aesthetic, the BoHo Chic package delivers an earthy yet elegant candle light dinner experience. With macramé accents, warm-toned fairy lights, natural textures, and an abundance of candles, this setup creates a cozy and intimate atmosphere. It is a wonderful choice for anniversary celebrations, milestone date nights, and couples who appreciate artful, Instagram-worthy décor.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Fairy Tale Proposals — ₹6,300</h3>
            <p>
              Planning to pop the question? The Fairy Tale Proposals package is designed specifically for that life-changing moment. With a grand archway of lights, cascading flower arrangements, an aisle of candles and rose petals, and a dramatic reveal setup, this package transforms your proposal into a scene from a fairy tale. Our team coordinates every detail discreetly, ensuring the surprise is flawless and your partner says yes in the most magical setting imaginable.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Tent of Romance — ₹6,500</h3>
            <p>
              Our most luxurious offering, the Tent of Romance envelops you in an intimate tent canopy adorned with draped fabrics, twinkling fairy lights, rose petals, premium candle arrangements, and lush décor. This package is ideal for grand anniversary celebrations, honeymoon dinners, or when you want to give your partner the ultimate romantic experience. Every element is premium — from the setup materials to the gourmet multi-course meal.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">The Elite Group Setup — ₹5,400</h3>
            <p>
              Celebrating with friends or family? The Elite Group Setup accommodates small groups while maintaining the romantic ambiance HIVY is known for. Perfect for double dates, engagement parties, small birthday gatherings, or friend-group celebrations, this package combines our signature candle-lit atmosphere with comfortable group seating and generous food portions.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">How to Book Your Package</h3>
            <p>
              Ready to book? Simply choose your preferred package, select a date and time slot, and reach out to us via WhatsApp or phone. Our team will confirm availability, arrange your setup, and ensure every detail is perfect for your special evening. Weekend and holiday slots are in high demand, so we recommend booking 2-3 days in advance to secure your preferred date.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What is included in all candle light dinner packages?",
                answer: "Every package at HIVY includes 3 hours of private celebration time, a welcome drink, multi-course gourmet meal (starter, main course, dessert), romantic candle & fairy light decorations, rose petal arrangements, soft background music, and exclusive venue access."
              },
              {
                question: "Which package is best for a proposal?",
                answer: "The Fairy Tale Proposals package (₹6,300) is specifically designed for proposals with a grand archway, cascading flowers, candle aisle, and dramatic reveal setup. Our team coordinates everything discreetly to ensure a perfect surprise."
              },
              {
                question: "Do all packages include cake?",
                answer: "Yes! All our currently visible packages — Swing of LOVE, BoHo Chic, Fairy Tale Proposals, Tent of Romance, and The Elite Group Setup — include a complimentary celebration cake. Non-alcoholic champagne is available as an add-on for ₹500."
              },
              {
                question: "Can I upgrade or customize my chosen package?",
                answer: "Absolutely! You can add extra roses, balloon decorations, personalized banners, photo frames, name plates, and other customizations to any package. Share your ideas with our team and we'll provide a custom quote."
              },
              {
                question: "What is the difference between Swing of LOVE and BoHo Chic?",
                answer: "Swing of LOVE (₹5,100) features a dreamy swing seating area with fairy lights and rose petals — perfect for whimsical date nights. BoHo Chic (₹5,700) offers a rustic bohemian aesthetic with macramé accents, warm tones, and natural textures — ideal for Instagram-worthy celebrations."
              },
              {
                question: "Is the Elite Group Setup suitable for couples?",
                answer: "While the Elite Group Setup (₹5,400) is designed for small groups (double dates, engagement parties, friend gatherings), couples can also book it if they prefer the group-style seating arrangement. For couples, we typically recommend our other four packages."
              },
              {
                question: "How long is each candle light dinner session?",
                answer: "Each booking gives you exactly 3 hours of private time at the venue. This includes the full dining experience — from welcome drinks to dessert — plus time for photos, music, and enjoying the ambiance."
              },
              {
                question: "What food options are available with the packages?",
                answer: "Our gourmet menu includes Indian and Continental cuisine options. Each package includes a multi-course meal with starters, main course, and dessert. You can share your dietary preferences or food allergies when booking, and our chefs will accommodate your needs."
              },
              {
                question: "Can I book a package for a weekday vs weekend?",
                answer: "Yes, all packages are available every day of the week. Weekday bookings often have more slot availability. Weekend and holiday slots fill up quickly, so we recommend booking 2-3 days in advance for weekends."
              },
              {
                question: "Is photography included in the packages?",
                answer: "Our setups are designed to be photo-ready and Instagram-worthy. While basic photography coordination is available on request, professional photography can be arranged as an add-on service. Many couples bring their own photographer too."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-amber-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
