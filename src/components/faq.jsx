import { useState } from 'react';
import { Plus, X } from 'lucide-react';

function Faq (){
        const [openId, setOpenId] = useState(null);
    
        const toggleAccordion = (id) => {
          setOpenId(openId === id ? null : id);
        };
      
        const faqs = [
            { id: 1, question: 'Can I upload a CV?', answer: 'Yes, you can easily upload your CV when applying for jobs' },
            { id: 2, question: 'How long will the recruitment process take?', answer: 'The recruitment process typically takes a few weeks...' },
            { id: 3, question: 'What does the recruitment and selection process involve?', answer: 'Recruitment involves application, interviews, and assessments...' },
            { id: 4, question: 'Do you recruit for Graduates, Apprentices and Students?', answer: 'Yes, we have special programs for students and recent graduates...' },
            { id: 5, question: 'Can I receive notifications for any future jobs that may interest me?', answer: 'Yes, you can sign up for job alerts on our platform...' },
          ];

    return(
        <>
         <div className="w-[95%]  mx-auto px-4 py-12">
                <h2 className="md:text-[40px] lg:text-[50px] sm:text-[30px] text-[24px] font-bold font-fig  text-center mb-4">Frequently Asked Questions</h2>


                <div className="space-y-4 mt-[30px]">
                    {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className={`p-4 rounded-lg ${openId === faq.id ? 'bg-[#EBF5F4]' : 'border-b border-[#30968940]'}`}
                    >
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(faq.id)}>
                        <div className="flex items-center gap-4">
                            <span className="text-lg font-semibold text-green-600">{faq.id.toString().padStart(2, '0')}</span>
                            <span className="font-semibold md:text-[20px] lg:text-[24px] sm:text-[17px]">{faq.question}</span>
                        </div>
                        {openId === faq.id ? (
                            <X className="text-green-600 w-6 h-6" />
                        ) : (
                            <Plus className="text-green-600 w-6 h-6" />
                        )}
                        </div>

                        {openId === faq.id && (
                        <p className="mt-4 text-gray-600 font-fig md:text-[16px]">{faq.answer}</p>
                        )}
          </div>
        ))}
      </div>
    </div>
        </>
    )

}
export default Faq