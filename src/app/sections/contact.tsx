"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Open to opportunities and interesting projects. Let&apos;s connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email" 
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="bg-secondary/50 border-border/50 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:rafaelkefren@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">rafaelkefren@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://github.com/Lordymine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/Lordymine</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/rafael-oliveira-01188829a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/rafael-oliveira-01188829a</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
