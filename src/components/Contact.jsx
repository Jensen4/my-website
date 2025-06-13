function Contact() {
    return (
        <section id="contact" className="min-h-screen relative py-15 px-4">
            <div className="container max-w-5xl">
                <h2 className="text-4xl font-bold text-center">
                    Get In Touch
                </h2>
                <p className="mt-8 text-center mx-auto">
                    Want to collaborate? Feel free to reach out! I'm always open to new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                        {/* This section im still not sure what to put, if i decide to put nothing just remove it */}
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-semibold text-center mb-4">
                            Send A Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-grey-200/50 transition duration-250 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-grey-200/50 transition duration-250 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md resize-none border border-input bg-grey-200/50 rounded-md transition duration-250 focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;