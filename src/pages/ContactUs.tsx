import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
};

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        subject: data.subject,
        message: data.message,
        to_email: "contact@yourcompany.com", // Replace with your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);

      toast({
        title: "Message sent!",
        description:
          "Thank you for your message. We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for any inquiries about our smart
              scanning solutions
            </p>
          </div>

          <div className="grid  gap-0   ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Company"
                  {...register("company", { required: "Company is required" })}
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                  className={`min-h-[150px] ${
                    errors.message ? "border-destructive" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
