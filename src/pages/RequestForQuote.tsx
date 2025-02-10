import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, Link } from "react-router-dom";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { products } from "@/data/productData";

type RFQFormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    product: string;
    quantity: string;
    addAdditional: boolean;
    additionalProduct?: string;
    additionalQuantity?: string;
    requests: string;
    notes: string;
};



const RequestForQuote = () => {
    const { toast } = useToast();
    const location = useLocation();
    const [isSubmitting, setIsSubmitting] = useState(false); // Add state here
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<RFQFormData>({
        defaultValues: {
            product: location.state?.product || ""
        }
    });

    const onSubmit = async (data: RFQFormData) => {
        setIsSubmitting(true);
        console.log("Form submitted:", data);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                title: "Request submitted!",
                description: "We'll get back to you with a quote soon.",
            });
            reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit request. Please try again.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const addAdditional = watch("addAdditional");

    return (
        <div className="flex flex-col">
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-primary mb-4">Request for Quote</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Thank you for your interest in our products! Please fill in the details below,
                            and our team will get back to you with a customized quote.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">1. Contact Information</h2>
                            <div>
                                <Input
                                    placeholder="Full Name"
                                    {...register("name", { required: "Name is required" })}
                                    className={errors.name ? "border-destructive" : ""}
                                />
                                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Company Name"
                                    {...register("company", { required: "Company name is required" })}
                                    className={errors.company ? "border-destructive" : ""}
                                />
                                {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className={errors.email ? "border-destructive" : ""}
                                />
                                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Phone Number"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                                            message: "Invalid phone number"
                                        }
                                    })}
                                    className={errors.phone ? "border-destructive" : ""}
                                />
                                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Country/Location"
                                    {...register("country", { required: "Country is required" })}
                                    className={errors.country ? "border-destructive" : ""}
                                />
                                {errors.country && <p className="text-sm text-destructive mt-1">{errors.country.message}</p>}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">2. Product Details</h2>
                            <div>
                                <Input
                                    placeholder="Selected Product"
                                    {...register("product", { required: "Product is required" })}
                                    readOnly
                                    className="bg-muted"
                                />
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    placeholder="Quantity Required"
                                    {...register("quantity", {
                                        required: "Quantity is required",
                                        min: { value: 1, message: "Minimum quantity is 1" }
                                    })}
                                    className={errors.quantity ? "border-destructive" : ""}
                                />
                                {errors.quantity && <p className="text-sm text-destructive mt-1">{errors.quantity.message}</p>}
                            </div>

                            <div className="space-y-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        {...register("addAdditional")}
                                        className="form-checkbox h-4 w-4 text-primary"
                                    />
                                    <span>Add Additional Product?</span>
                                </label>

                                {addAdditional && (
                                    <div className="space-y-4 pl-6">
                                        <div>
                                            <select
                                                {...register("additionalProduct")}
                                                className="w-full p-2 border rounded-md"
                                            >
                                                <option value="">Select Product</option>
                                                {Object.values(products).map((product) => (
                                                    <option key={product.title} value={product.title}>
                                                        {product.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <Input
                                                type="number"
                                                placeholder="Quantity Required"
                                                {...register("additionalQuantity", {
                                                    min: { value: 1, message: "Minimum quantity is 1" }
                                                })}
                                            />
                                            {errors.additionalQuantity && (
                                                <p className="text-sm text-destructive mt-1">{errors.additionalQuantity.message}</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional Requirements */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">3. Additional Requirements</h2>
                            <div>
                                <Textarea
                                    placeholder="Special Requests / Customization"
                                    {...register("requests")}
                                    className="min-h-[100px]"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Other Notes"
                                    {...register("notes")}
                                    className="min-h-[100px]"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                "Submitting..."
                            ) : (
                                <>
                                    Submit Request
                                    <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RequestForQuote;