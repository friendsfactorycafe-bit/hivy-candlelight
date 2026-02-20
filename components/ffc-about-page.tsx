'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY - Place for Celebrations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's Premier Destination for Candlelight Dinners & Romantic Celebrations
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="About Page" className="text-lg px-8 py-6" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Love Stories Unfold Naturally
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY - Place for Celebrations</strong> in Surat's Gotri area, we understand the chaos of modern life leaves little room for romance. Couples crave intimate moments to express love, but finding the right venue—a place blending privacy, beauty, and magic—remains elusive.
                </p>
                <p>
                  That's why we transformed a stunning <strong>rooftop into Surat's premier destination for candlelight dinners</strong>, complete with fairy lights, floral arches, and personalized decorations. Our romantic rooftop cafe offers the perfect escape for couples seeking a private celebration venue in Surat.
                </p>
                <p>
                  From heartfelt <strong>birthday surprises</strong> and <strong>anniversary celebrations</strong> to unforgettable <strong>marriage proposals</strong>, engagement reveals, <strong>pre-wedding shoots</strong>, pregnancy announcements, and last candlelight dinners before marriage, we've hosted <strong>500+ magical evenings</strong>.
                </p>
                <p className="font-medium text-rose-900">
                  Our mission: Create spaces where love stories unfold naturally.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-950 hover:to-amber-800 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/30.png"
                  alt="HIVY - Place for Celebrations Surat - Romantic Swing of Love Setup for Candlelight Dinner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Magical Evenings</p>
                  <p className="text-sm opacity-90">Creating memories since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Magical Evenings" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Unique Setups" },
              { icon: Clock, number: "5+", label: "Years of Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-rose-900" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-rose-900">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/35.png"
                  alt="HIVY - Place for Celebrations Team - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Glowing Smile</p>
                  <p className="text-sm opacity-90">Our passionate team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Behind Every Glowing Smile
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY - Place for Celebrations</strong>. Committed to crafting unforgettable experiences, our dedicated staff is here to ensure that every detail of your visit is perfect.
                </p>
                <p>
                  From our talented chefs who bring culinary dreams to life, to our attentive servers who anticipate your every need, each member of our team is dedicated to creating moments of joy and romance for you and your loved one.
                </p>
                <p>
                  Whether you're planning a <strong>candlelight dinner in Surat</strong>, a <strong>birthday surprise for your girlfriend</strong>, an <strong>anniversary celebration</strong>, or a <strong>romantic proposal</strong>, our team handles everything from setup to cleanup so you can focus on love.
                </p>
                <p className="font-medium text-rose-900">
                  Join us and let us make your evening truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                What Sets Us Apart in Surat
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Prime Gotri Rooftop Location</h3>
                    <p className="text-gray-600">Breathtaking city views, private setups away from crowds on Sevasi-Canal Road. The best rooftop cafe in Surat for couples seeking privacy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Custom Celebration Packages</h3>
                    <p className="text-gray-600">Starting ₹4700, including mocktails, cakes, photographer, and themed decor for birthday surprises, anniversary celebrations, proposals, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pan-India Appeal, Local Heart</h3>
                    <p className="text-gray-600">Serving Surat couples while inspiring visitors with our Instagram-famous romantic setups and pre-wedding photoshoot venues.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Experience Guaranteed</h3>
                    <p className="text-gray-600">From setup to cleanup, our team handles everything so you focus on love. Couple-friendly cafe with complete privacy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/packages/swing-of-love/images/40.png"
                  alt="Why Choose HIVY - Place for Celebrations - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The HIVY Story — Surat's Most Trusted Candle Light Dinner Venue
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              HIVY — Place for Celebrations was born from a simple yet powerful idea: every couple in Surat deserves a beautiful, private space to celebrate their love without compromise. What started in 2019 as a small rooftop setup with fairy lights and a handful of candles has grown into Surat's most sought-after romantic dining destination, trusted by over 3,000 couples for their most cherished milestones.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">From a Dream to Surat's #1 Romantic Venue</h3>
            <p>
              Our founders saw a gap in Surat's dining scene — while the city had plenty of restaurants, none offered the level of privacy, personalization, and romance that couples truly craved. We set out to build a venue where every evening feels like a fairy tale, where every detail is thoughtfully curated, and where couples can express their love freely. Today, with five unique themed setups, a 4.9-star Google rating, and hundreds of five-star reviews, HIVY has become synonymous with romantic celebrations in Surat.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">What We Offer — Beyond Just a Candle Light Dinner</h3>
            <p>
              At HIVY, we host a wide range of celebrations: candle light dinners for couples, surprise birthday parties, wedding anniversary celebrations, marriage proposals, engagement reveals, pre-wedding photoshoots, pregnancy announcements, farewell dinners, and even last candle light dinners before marriage. Each celebration is backed by our complete setup-to-cleanup service, which means you don't need to worry about anything — our team handles the decorations, lighting, music, food, cake, and photography coordination so you can focus entirely on enjoying your time together.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Our Commitment to Excellence</h3>
            <p>
              Quality, privacy, and attention to detail are the three pillars of everything we do at HIVY. Each of our five packages — Swing of LOVE, BoHo Chic, Fairy Tale Proposals, Tent of Romance, and The Elite Group Setup — is designed with a distinct aesthetic and mood. From bohemian chic to fairy-tale elegance, every setup features premium decorations, carefully arranged candle arrangements, fresh rose petals, custom lighting, and comfortable seating. Our gourmet menu, crafted by experienced chefs, includes a multi-course meal with Indian and Continental options, complemented by welcome drinks, desserts, and a celebratory cake.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Why 3,000+ Couples Trust HIVY</h3>
            <p>
              The reason thousands of couples continue to choose HIVY is simple — we deliver on our promise every single time. When you book with HIVY, you get complete privacy (the venue is exclusively yours), a meticulously prepared setup that matches your expectations, punctual and professional service, and an evening that feels genuinely special. Our 4.9-star Google rating isn't just a number — it reflects the love, effort, and passion our team puts into every celebration. We invite you to read our reviews and see for yourself why couples across Surat, Gujarat, and beyond choose HIVY for their most important moments.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              FAQs About HIVY - Place for Celebrations
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What is HIVY and what does it offer?",
                answer: "HIVY — Place for Celebrations is Surat's premier private candle light dinner venue, offering romantic dining experiences, surprise birthday setups, anniversary celebrations, marriage proposals, and more. Located in Adajan, we provide fully private, beautifully decorated setups exclusively for couples."
              },
              {
                question: "Where is HIVY located in Surat?",
                answer: "HIVY is located in Adajan, Surat, near Pratham Circle on Sevasi-Canal Road. We are easily accessible from all major areas of Surat including Vesu, Athwa, Piplod, City Light, Pal, Varachha, and Dumas Road."
              },
              {
                question: "How long has HIVY been operating?",
                answer: "HIVY has been creating magical celebrations for couples in Surat since 2019. In over 5 years, we have hosted 3,000+ romantic evenings and maintained a 4.9-star Google rating with hundreds of five-star reviews."
              },
              {
                question: "Is HIVY only for couples?",
                answer: "While most of our packages are designed for couples, we also offer The Elite Group Setup (₹5,400) for small group celebrations like double dates, engagement parties, and birthday gatherings. However, every booking is private — only your group is present during your celebration."
              },
              {
                question: "What types of celebrations can I host at HIVY?",
                answer: "You can host candle light dinners, surprise birthday celebrations, anniversary dinners, marriage proposals, engagement reveals, pre-wedding photoshoots, pregnancy announcements, farewell dinners, congratulation parties, and any other romantic or private celebration."
              },
              {
                question: "How many packages does HIVY offer?",
                answer: "HIVY offers five unique candle light dinner packages: Swing of LOVE (₹5,100), BoHo Chic (₹5,700), Fairy Tale Proposals (₹6,300), Tent of Romance (₹6,500), and The Elite Group Setup (₹5,400). Each has a distinct theme and set of inclusions."
              },
              {
                question: "What is HIVY's Google rating?",
                answer: "HIVY has a 4.9-star rating on Google with hundreds of verified reviews from happy couples. Our consistently high rating reflects our commitment to delivering exceptional romantic dining experiences every single time."
              },
              {
                question: "Does HIVY provide food or only decoration?",
                answer: "HIVY provides a complete experience that includes both premium decorations AND a multi-course gourmet meal. Every package includes a welcome drink, a multi-course meal (starter, main course, dessert), romantic ambiance with candles, fairy lights, rose petals, and background music."
              },
              {
                question: "Can I visit HIVY before booking to see the venue?",
                answer: "Yes! You are welcome to visit our venue and see the setups before booking. Contact us on WhatsApp to schedule a quick visit. You can also check our virtual tour, Instagram page, and Google reviews for photos and videos of actual celebrations."
              },
              {
                question: "How can I contact HIVY for more information?",
                answer: `You can reach HIVY by calling or WhatsApping ${siteConfig.phone}. You can also email us at ${siteConfig.email} or visit our Contact page to fill out the booking form. Our team typically responds within minutes.`
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-900 to-rose-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Your Memory?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your candlelight dinner package today and surprise your partner with memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-950 hover:to-amber-800 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-rose-900 hover:text-rose-950 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-rose-900 hover:text-rose-950">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
