import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const FaqSection = React.forwardRef(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full bg-gradient-to-b from-transparent via-gray-50 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {title}
            </h2>
            {description && (
              <p className="text-sm md:text-lg text-gray-600">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-3">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center bg-white shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 mb-4">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-base font-semibold text-gray-900 mb-2">
                {contactInfo.title}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {contactInfo.description}
              </p>
              <Button 
                size="lg" 
                onClick={contactInfo.onContact}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "border border-gray-200",
        isOpen
          ? "bg-gradient-to-br from-white via-blue-50/30 to-white shadow-lg"
          : "bg-white hover:bg-gray-50 shadow-md"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 h-auto justify-between hover:bg-transparent"
      >
        <h3
          className={cn(
            "text-base md:text-lg font-semibold transition-colors duration-200 text-left",
            "text-gray-700",
            isOpen && "text-gray-900"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-1 rounded-full flex-shrink-0 ml-4",
            "transition-colors duration-200",
            isOpen ? "text-blue-600 bg-blue-100" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-5 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm md:text-base text-gray-600 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

