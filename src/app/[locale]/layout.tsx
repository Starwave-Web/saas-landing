import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import { Toaster } from "@/src/components/ui/toaster";
import { ThemeProvider } from "@/src/components/common/theme-provider";
import { routing } from "@/src/i18n/routing";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });


//@ts-expect-error locale can be any
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
