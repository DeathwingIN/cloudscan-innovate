import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-background text-foreground py-12 pt-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">
                        Effective Date: April 22, 2025<br />
                        Last Updated: April 22, 2025
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {/* Introduction */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Cloud Smart ("Company", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites, use our services, or interact with us in any way through our website and mobile application.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            This policy applies globally to all users, regardless of location, and we comply with applicable data protection laws including the GDPR, CCPA, and other regional regulations where we operate.
                        </p>
                    </motion.section>

                    {/* Section 1 - Information We Collect */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <div>
                                <h3 className="font-medium mb-2">a. Information You Provide to Us</h3>
                                <ul className="list-disc list-inside space-y-2 pl-4">
                                    <li>Name, email address, phone number, and business contact details</li>
                                    <li>Company name, job title, and professional credentials</li>
                                    <li>Account login credentials</li>
                                    <li>Billing and payment information</li>
                                    <li>Support and service inquiries</li>
                                </ul>
                            </div>

                            {/* Other subsections of Section 1 */}
                        </div>
                    </motion.section>

                    {/* Section 2 - How We Use Your Information */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <p>We process your personal data under the following legal bases:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Your consent</li>
                                <li>Performance of a contract</li>
                                <li>Compliance with legal obligations</li>
                                <li>Legitimate interests pursued by us or a third party</li>
                            </ul>

                            <div>
                                <h3 className="font-medium mb-2">2.1 Legal Basis for Processing (GDPR)</h3>
                                <ul className="list-disc list-inside space-y-2 pl-4">
                                    <li>Provide, maintain, and improve our software services</li>
                                    <li>Respond to your inquiries and support requests</li>
                                    <li>Process transactions and manage billing</li>
                                    <li>Send you updates, marketing communications, and service notices</li>
                                    <li>Comply with legal and regulatory obligations</li>
                                    <li>Prevent fraud and ensure security</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Section 3 - Sharing of Your Information */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">3. Sharing of Your Information</h2>
                        <div className="text-muted-foreground">
                            <p>We do not sell your personal information. We may share your information with:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                                <li>Service providers and vendors assisting with business operations</li>
                                <li>Affiliates and subsidiaries within the Cloud Smart group</li>
                                <li>Legal and regulatory authorities when required</li>
                                <li>Business partners only with your consent</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 4 - Data Transfers */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Transfers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            As a global company, your information may be transferred to and processed in countries other than your own. We ensure all data transfers comply with applicable data protection laws, including the use of Standard Contractual Clauses (SCCs) where necessary.
                        </p>
                    </motion.section>

                    {/* Section 5 - Data Retention */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Retention</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                        </p>
                    </motion.section>

                    {/* Section 6 - Your Privacy Rights */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Privacy Rights</h2>
                        <div className="text-muted-foreground">
                            <p>Depending on your location, you may have rights such as:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                                <li>Access to your personal data</li>
                                <li>Correction of inaccurate or outdated information</li>
                                <li>Deletion of your data (“right to be forgotten”)</li>
                                <li>Objection to processing</li>
                                <li>Data portability</li>
                                <li>Withdrawal of consent</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, please contact us at: {" "}
                                <a href="mailto:[Insert contact email]" className="text-primary hover:underline">
                                    [Insert contact email]
                                </a>
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 7- Security Measures */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">7. Security Measures</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement industry-standard security practices to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
                        </p>
                    </motion.section>

                    {/* Section 8 - Cookies & Tracking Technologies */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">8. Cookies & Tracking Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar technologies to enhance your experience, analyze site traffic, and offer personalized content. You can manage your cookie preferences through your browser settings.
                        </p>
                    </motion.section>

                    {/* Section 9 - Children’s Privacy */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">9. Children’s Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.
                        </p>
                    </motion.section>


                    {/* Section 10 - Changes to This Privacy Policy */}
                    <motion.section
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="bg-secondary/10 p-6 rounded-lg shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">10. Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this policy from time to time. We will notify you of significant changes by posting a notice on our website or contacting you directly.
                        </p>
                    </motion.section>

                    {/* Contact Section */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;