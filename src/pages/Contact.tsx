import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const email = "rania.zhirii@gmail.com";
  const phone = "+212 649688653";
  const location = "Marrakech, Maroc";

  const handleEmailClick = () => {
    const subject = "Prise de contact depuis votre portfolio";
    const body = `Bonjour,\n\nJe vous contacte suite à la visite de votre portfolio.\n\n[Ceci est un modèle - veuillez modifier le contenu]\n\nCordialement,\n[Votre nom]`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto">
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
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Email Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 break-all">{email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Phone Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 dark:text-white">Téléphone</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{phone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 dark:text-white">Localisation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{location}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Contact Card */}
      <div className="w-full">
        <div className="max-w-2xl mx-auto">
          <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
            {/* Card Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-white">Envoyez-moi un message</h2>
              <p className="text-blue-100 mt-2">
                Je réponds généralement dans les 24 heures
              </p>
            </div>

            <CardContent className="p-8 space-y-6">
              {/* Availability Badge */}
              <div className="flex justify-center">
                <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 px-4 py-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Disponible pour de nouveaux projets
                </Badge>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-slate-600 dark:text-slate-400">
                    La manière la plus rapide de me contacter est par email. 
                    Cliquez sur le bouton ci-dessous pour ouvrir votre client email 
                    avec un message pré-rempli.
                  </p>
                </div>
              </div>

              {/* Email Button */}
              <Button 
                onClick={handleEmailClick}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group"
              >
                <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                M'envoyer un email
              </Button>

              {/* Alternative Contact Methods */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Vous pouvez aussi me contacter directement par téléphone ou via les réseaux sociaux
                </p>
                
                <div className="flex justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Phone className="w-4 h-4" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">{email}</span>
                    <span className="sm:hidden">Email</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}