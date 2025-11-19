import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const email = "rania.zhirii@gmail.com";
  const phone = "+212 649688653";
  const location = "Marrakech, Maroc";
  const linkedinUrl = "https://www.linkedin.com/in/rania-zhiri-3a6301290";

  const handleEmailClick = () => {
    const subject = "Prise de contact depuis votre portfolio";
    const body = `Bonjour,\n\nJe vous contacte suite à la visite de votre portfolio.\n\n[Ceci est un modèle - veuillez modifier le contenu]\n\nCordialement,\n[Votre nom]`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto px-4">
      <Helmet>
        <title>Contact — ZHIRI Rania</title>
        <meta name="description" content="Contactez-moi pour discuter de vos projets et collaborations" />
      </Helmet>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
          Contactez-moi
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Je suis toujours intéressée par de nouvelles opportunités et collaborations. 
          N'hésitez pas à me contacter pour discuter de vos projets.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full justify-center">
        {/* Email Card */}
        <Card className="w-full md:w-[28rem] lg:w-[32rem] p-6 rounded-2xl group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 break-all">{email}</p>
          </CardContent>
        </Card>

        {/* Phone Card */}
        <Card className="w-full md:w-[28rem] lg:w-[32rem] p-6 rounded-2xl group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Téléphone</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{phone}</p>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="w-full md:w-[28rem] lg:w-[32rem] p-6 rounded-2xl group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">Localisation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{location}</p>
          </CardContent>
        </Card>

        {/* LinkedIn Card */}
        <Card className="w-full md:w-[28rem] lg:w-[32rem] p-6 rounded-2xl group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h3>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 break-all hover:underline">
              {linkedinUrl}
            </a>
          </CardContent>
        </Card>

       
      </div>

      {/* Main Contact Card with Email Button */}
      <div className="w-full">
        <div className="max-w-2xl mx-auto">
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-white">Envoyez-moi un message</h2>
              <p className="text-blue-100 mt-2">
                Je réponds généralement dans les 24 heures
              </p>
            </div>

            <CardContent className="p-8 space-y-6">
              <div className="flex justify-center">
                <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 px-4 py-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Disponible pour de nouveaux projets
                </Badge>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-center">
                  La manière la plus rapide de me contacter est par email. Cliquez sur le bouton ci-dessous pour ouvrir votre client email avec un message pré-rempli.
                </p>
              </div>

              <Button 
                onClick={handleEmailClick}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group"
              >
                <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                M'envoyer un email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
