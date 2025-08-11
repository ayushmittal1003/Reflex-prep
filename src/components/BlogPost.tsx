import React from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Eye, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  postId: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const blogContent = {
    'shadow-under-stethoscope': {
      title: 'Shadow Under The Stethoscope: Burnout During NEET-PG Preparation',
      author: 'Dr. Reflex Team',
      date: '15/01/2025 14:30',
      readTime: '15 min read',
      views: '1.2k views',
      category: 'Medical Journey',
      tags: ['medical', 'burnout', 'neet-pg', 'mental-health'],
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">As my MBBS college times draw to a close with my final year almost halfway through, the friends I made, the horrible vivas we gave, the nights spent sleepless (studies and otherwise), all of it leaves my eyes slightly misty. But something larger and more pressing persists in the back of my mind. And not just me, but of thousands of medical students across the country: NEET PG preparation.</p>

        <p class="mb-6">19 subjects, an ocean of facts, triads, diseases, syndromes and their treatments. But amongst all of this medical knowledge, a disease quietly slips into the hearts and minds of these future specialists: burnout. Worst of all? Very few even acknowledge it, let alone talk about it.</p>

        <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <p class="text-red-800 font-semibold">"Conducted by the National Board of Examination in Medical Sciences (NBEMS), this 200-question, 3-hour-long test is often the deciding factor for many students in their life and career trajectory."</p>
        </div>

        <p class="mb-6">Whether they diagnose diseases looking at stained slides, or perform community outreach programs to the underserved or perform life-saving or life-improving interventions, the rank achieved in this one exam is a major factor in deciding a doctor's method of delivering care.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding Burnout Syndrome</h2>
        <p class="mb-6">According to the ICD, burnout "is a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully managed." It has three dimensions to it:</p>
        
        <ul class="list-decimal list-inside mb-6 space-y-2 ml-4">
          <li>Feelings of energy depletion or exhaustion</li>
          <li>Increased mental distance from one's job, or feelings of negativism or cynicism related to one's job</li>
          <li>Reduced professional efficacy</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Causes of Burnout During NEET-PG Preparation</h2>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">1. The Massive Syllabus</h3>
        <p class="mb-4">This exam tests its aspirants on 19 subjects: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Preventative & Social Medicine, Forensic Medicine, Surgery, Medicine, Obstetrics & Gynecology, Pediatrics, Oto-laryngology, Ophthalmology, Orthopedics, Dermatology, Psychiatry, Anesthesia & Radiology.</p>
        
        <p class="mb-6">The questions range from discrete factoids which have no discernible connections to any other concept, to specific values of biological parameters, to massively complex clinical scenarios which can be misdiagnosed if the aspirant misses a single statement or finding.</p>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-blue-800 mb-3">Reflex App - Your Study Companion</h3>
          <p class="text-blue-700 mb-3">There is a tool that can help you in your preparation by narrowing your focus like that of a laser and prevent accumulation of needless facts & stress: Reflex App – designed by a doctor for doctors.</p>
          <ul class="text-blue-700 space-y-2">
            <li>• Thousands of PYQs for NEET-PG & INICET</li>
            <li>• Test series that closely emulate exam patterns</li>
            <li>• Recurring pattern identification</li>
            <li>• Focused preparation approach</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">2. The Sheer Competition</h3>
        <p class="mb-6">According to the latest NEET-PG data, 2.42 lakh doctors duked it out in this arena in 2025, an increase from 2.28 lakhs from last year. This trend shows no signs of slowing down as those who did not qualify for a government PG seat are highly likely to try again next year.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Limited Government PG Seats</h3>
        <p class="mb-6">As of 2025, there are 73,157 post-graduate seats in India. Out of which 33,416 are the sought-after seats in government PG institutes; the rest belong to private institutes where the fees are unattainable for a massive population in the country.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">4. Additional Pressure Points</h3>
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li><strong>Mock Test Obsession:</strong> Students make scores their sole focus, letting them determine their mental health</li>
          <li><strong>Pedal-to-the-metal Approach:</strong> Going all-out without building mental stamina first</li>
          <li><strong>Familial & Societal Pressure:</strong> First-generation doctors carrying family expectations</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Symptoms & Stages of Burnout</h2>
        
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">Physical & Psychological Symptoms</h3>
          <ul class="text-yellow-700 space-y-1">
            <li>• Persistent exhaustion</li>
            <li>• Sleep disturbances (insomnia or feeling tired after sleeping)</li>
            <li>• Headaches and muscle pains</li>
            <li>• Stomach aches & nausea</li>
            <li>• Loss of motivation</li>
            <li>• Feelings of disconnection</li>
            <li>• Increased negativity/cynicism</li>
            <li>• Social withdrawal</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Three Stages of Burnout</h3>
        <ol class="list-decimal list-inside mb-6 space-y-3 ml-4">
          <li><strong>Stage 1:</strong> Stress arousal, poor concentration, memory lapses, and irritability</li>
          <li><strong>Stage 2:</strong> Maladaptive behaviors - avoidance, tardiness, social withdrawal</li>
          <li><strong>Stage 3:</strong> Mental decline leading to anxiety, depression, apathy, or even suicidal ideation</li>
        </ol>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Prevalence Statistics</h2>
        <p class="mb-6">A study by Bhugra et al. (2021) on almost 2,900 medical students from 9 countries, including India, revealed that <strong>77% of students report feeling exhausted and 77% feel disengaged</strong> from their work and academics.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Combat Burnout: Evidence-Based Solutions</h2>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">1. Developing Mental Resilience</h3>
        <p class="mb-4">Resilience is "the ability to cope mentally and emotionally with a crisis or return to a pre-crisis state quickly." Methods to build resilience:</p>
        <ul class="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>Practice meditation and mindfulness</li>
          <li>Embrace small discomforts and gradually take on bigger challenges</li>
          <li>Practice an acceptance mindset</li>
          <li>Practice positive thinking and gratitude</li>
          <li>Learn from your past experiences</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Make Time for Hobbies</h3>
        <p class="mb-6">Pick up that dusty guitar or watch your favorite show. Whatever makes your mind happy, do that for some time. Life is too long to stay stressed forever, and too short to not stop and take a breather. This gives your brain respite and may help make new connections between concepts.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Physical Exercise</h3>
        <p class="mb-6">Physical activity increases endorphins, dopamine & serotonin (happy hormones), elevates mood, and reduces stress levels while providing cardiovascular benefits.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">4. Healthy Nutrition and Hydration</h3>
        <p class="mb-6">Maintain a balanced diet from all food groups and stay hydrated. Include brain-boosting foods like almonds, walnuts, berries, and green leafy vegetables.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">5. Build Healthy Connections</h3>
        <p class="mb-6">A healthy support system helps manage stress effectively and provides much-needed breaks from exam thoughts. Time with friends is what you'll remember, not which table you left during preparation.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">6. Pace Yourself</h3>
        <p class="mb-6">Your progress is the only progress you need to monitor. Break larger goals into smaller actionable steps, track progress, and be patient with yourself. Small, consistent, meaningful progress will take you farther than yo-yoing between bursts of effort and productivity drops.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">7. Take Strategic Breaks</h3>
        <p class="mb-6">If you feel burnout symptoms approaching, stop. Remember that you're human with limits. Take dedicated time off to recharge your academic, mental & emotional batteries.</p>

        <div class="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-teal-800 mb-3">Key Takeaway</h3>
          <p class="text-teal-700 text-lg font-medium">"IT'S A MARATHON, NOT A SPRINT."</p>
          <p class="text-teal-700 mt-3">Being 'too exhausted to study' is not an excuse; for many people, it's a real condition. Learn to accept, assess & respond to stressors in a healthy way.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Remember: You're Human First</h2>
        <p class="mb-6">As medical students, we face immense pressure daily. We need to learn how to accept, assess & respond to these stressors healthily and productively. We are not only doctors but also humans with dreams, ambitions, and aspirations to fulfill.</p>

        <p class="mb-6">If you feel symptoms coming on, don't ignore them. Listen to your body - it has evolved over millions of years to give you the best shot at survival. Learn to rely on loved ones, friends, peers, and know when to ask for help.</p>

        <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-indigo-800 mb-3">Strategic Preparation with Reflex</h3>
          <p class="text-indigo-700">Strategize effectively keeping all variables in mind to ensure you're not stretched beyond your limits. Use apps such as Reflex to hammer in the most asked questions & volatile topics to ensure you're as sharp as the scalpel you will wield to cut through the competition.</p>
        </div>

        <p class="text-lg leading-relaxed">NEET-PG is undoubtedly a tough examination, but there are ways to make it easier and bolster your chances of success. It all starts with taking care of yourself first, then tackling the academic challenges with a clear, resilient mind.</p>
      `
    },
    'second-shot': {
      title: 'Second Shot at NEET PG/INICET: A Different Approach',
      author: 'Dr. Reflex Team',
      date: '10/01/2025 09:15',
      readTime: '18 min read',
      views: '2.1k views',
      category: 'NEET PG Strategy',
      tags: ['neet-pg', 'inicet', 'second-attempt', 'strategy'],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p class="text-lg leading-relaxed mb-6">Here's something I learned the hard way: if you keep doing what you did the first time, you're likely to get the same result. If your first attempt didn't yield your desired rank, your second attempt has to come with a completely different mindset & strategy.</p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-800 font-semibold">This means: Study smarter, not just longer. Focus on active recall instead of just binge-watching lectures. Make previous year questions/topics a part of your daily preparation. Take care of yourself—not just physically, but mentally too.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Why a Different Approach Is Non-Negotiable</h2>
        <p class="mb-6">Your second attempt is your opportunity to prove that resilience, not perfection, defines success. Using the right tools—especially something like <strong>REFLEX</strong>—helped me stick to a smarter approach.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">What Went Wrong the First Time?</h2>
        <p class="mb-6">Before jumping into books again, I gave myself a moment to reflect. Not to blame myself—but to figure out where I tripped. I asked myself:</p>
        
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li>Did I waste time making colorful notes and ignoring questions?</li>
          <li>Did I forget how important solving PYQs was?</li>
          <li>Did I study in streaks instead of being consistent?</li>
          <li>Did anxiety mess up my time management in the exam?</li>
        </ul>

        <p class="mb-6">Once I answered those questions honestly, I realized what needed to change. That's when my actual <strong>NEET PG/INICET</strong> preparation began.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Keep the Syllabus Tight: Don't Try to Learn Everything</h2>
        <p class="mb-6">The syllabus is huge—no surprise there. But unlike the first time, I didn't try to be a perfectionist. I focused on mastering what mattered the most.</p>

        <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-green-800 mb-3">How REFLEX Helped</h3>
          <p class="text-green-700 mb-3">The REFLEX app organizes previous year questions (PYQs) topic-wise, so I wasn't guessing what to study. Instead, I was identifying patterns and understanding concepts that kept repeating.</p>
          <ul class="text-green-700 space-y-2">
            <li>• Sort questions by subject and topic</li>
            <li>• Track progress honestly—keeps you accountable</li>
            <li>• To-the-point explanations</li>
            <li>• Recognize topics you consistently mess up</li>
            <li>• Not just a question bank—a study buddy that keeps you on track</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Stop Ignoring Your Weak Subjects</h2>
        <p class="mb-6">For me, it was Microbiology. I dreaded it. But avoiding it didn't help me the first time, so this time, I did the opposite.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">What Worked:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li>Starting the day with 30-50 MCQs from my weak subject</li>
          <li>Writing down where I went wrong—not just marking it</li>
          <li>Dedicating 45-60 minutes a day to just that subject</li>
          <li>Checking progress after 10-14 days</li>
        </ul>

        <p class="mb-6">No, I didn't become a genius in my weak subject. <em>But I stopped bleeding marks—and that is a win</em>.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Previous Year Questions Should Be the Core of Your Prep</h2>
        <p class="mb-6">I also created a <strong>"PYQ Journal"</strong>—a handwritten notebook where I noted down concepts I got wrong. No copy-paste, no screenshots. Just writing them down helped them stick. Over time, this journal became my <strong>most powerful revision tool</strong>.</p>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">The Power of PYQs</h3>
          <p class="text-yellow-700">Previous Year Questions aren't just practice—they're your roadmap to understanding exam patterns, recurring concepts, and the examiner's mindset. Make them your daily companion.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">A Realistic Study Plan for the Second Attempt</h2>
        <p class="mb-6">I used to aim for 12-14 hour study days. It backfired. Now, I go for 8 focused hours—with real breaks and guilt-free downtime.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Daily Routine That Worked:</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-3">MORNING</h4>
            <ul class="text-blue-700 text-sm space-y-1">
              <li>• 7:30-9:00 AM: Revise high-yield topic</li>
              <li>• 9:00-10:00 AM: 40-50 PYQs on REFLEX</li>
            </ul>
          </div>
          <div class="bg-green-50 p-6 rounded-lg">
            <h4 class="font-semibold text-green-800 mb-3">AFTERNOON</h4>
            <ul class="text-green-700 text-sm space-y-1">
              <li>• 12:00-1:30 PM: Concept videos/LMRP</li>
              <li>• 2:30-3:30 PM: Flashcards/revision</li>
              <li>• 4:00-5:00 PM: Mini/Subject-wise test</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-6 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-3">EVENING</h4>
            <ul class="text-purple-700 text-sm space-y-1">
              <li>• 7:00-8:00 PM: Review mistakes</li>
              <li>• 8:00-9:00 PM: Light revision</li>
              <li>• 9:00-10:00 PM: Short subject review</li>
            </ul>
          </div>
        </div>

        <p class="mb-6"><strong>Weekends?</strong> Mock tests + reflection.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Test Series: Take Them Seriously—But Not Personally</h2>
        <p class="mb-6">One of my mocks gave me such a low percentile, I almost cried. But I didn't let it define me.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Instead, I:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li>Avoided full-length mocks until I built some momentum</li>
          <li>Took subject-wise tests weekly</li>
          <li>Reviewed each mock for 2-3 hours afterward</li>
          <li>Used REFLEX to find similar PYQs in weak areas</li>
        </ul>

        <p class="mb-6"><em>The goal? Progress, not perfection.</em></p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Real Struggle: Staying Mentally Strong</h2>
        <p class="mb-6">Some days, I couldn't focus for 10 minutes. Other days, I questioned if I should drop out entirely.</p>

        <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-indigo-800 mb-3">What Helped Me:</h3>
          <ul class="text-indigo-700 space-y-2">
            <li>• Taking short walks—no phone, just breathing</li>
            <li>• Calling a friend (not necessarily from medicine)</li>
            <li>• Writing about what I achieved/how I felt</li>
            <li>• Logging off social media for a month</li>
          </ul>
          <p class="text-indigo-700 mt-3 font-medium">NEET PG/INICET preparation is not just about your brain—it's about your heart too. Don't ignore it.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Surround Yourself with the Right Energy</h2>
        <p class="mb-6">One thing I consciously did during my second attempt was choosing what I consumed. Not just in books, but emotionally. I unfollowed pages that fed fear. I muted conversations that were only about "cut-off marks" and "so-and-so's rank."</p>

        <p class="mb-6">Instead, I joined a Telegram group with others giving their second shot—people who understood the journey and kept the vibes positive. Even on the worst days, I knew I wasn't alone. <strong>That changed everything.</strong></p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Power of Revision: Make It Your Superpower</h2>
        <p class="mb-6">Here's a hard truth: You don't need to read <em>more</em>. You need to remember <em>better</em>. The second time around, I gave revision the attention it deserved. Each weekend was a checkpoint, not a chill point.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6">Scheduled Revisions:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li><strong>Monday:</strong> Flashcards from short subjects</li>
          <li><strong>Wednesday:</strong> Weekly review of PYQs done via REFLEX</li>
          <li><strong>Saturday:</strong> Cumulative MCQ quiz across 3 subjects</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Importance of Adaptability</h2>
        <p class="mb-6">One underrated skill in NEET PG/INICET prep is adaptability. It's not just about discipline or planning—it's about how quickly you can pivot when something isn't working. In my first attempt, I stuck to one rigid routine, even when it became counterproductive.</p>

        <p class="mb-6">This time, I gave myself room to adjust. If a topic felt too dense in one source, I didn't force it—I switched to a video or discussed it with a friend.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Beware of the "I-Know-This" Trap</h2>
        <p class="mb-6">During a second attempt, there's a strange danger—you feel like you know things just because you've seen them before. I called it the "I-know-this" trap. Just because I <em>remembered</em> a question didn't mean I had mastered the <em>concept</em>.</p>

        <p class="mb-6">When I got a PYQ wrong—even one I'd seen before—it forced me to slow down and actually <em>learn</em>. It humbled me, but it also sharpened my preparation in a way that no first-time prep could have.</p>

        <div class="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-teal-800 mb-3">Why REFLEX Is More Than Just a Question Bank</h3>
          <p class="text-teal-700 mb-3">I've used multiple apps, but REFLEX felt different. It doesn't overwhelm you with "extra." It sticks to what matters—PREVIOUS YEAR TOPICS.</p>
          <ul class="text-teal-700 space-y-2">
            <li>• Simple, clean design</li>
            <li>• Filters to target specific years or subjects</li>
            <li>• Measure your improvement over time</li>
            <li>• Crisp and helpful explanations</li>
            <li>• Part of daily preparation routine</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Your Preparation, Your Terms</h2>
        <p class="mb-6">The biggest lesson I've learned? Preparation looks different for everyone. Don't compare your timeline, your study method, or your pace to anyone else's. What worked for someone else may not work for you—and that's okay.</p>

        <p class="mb-6"><strong>The second shot at NEET PG is your journey.</strong> You're not even obliged to follow any schedule exactly. Make your own, what suits you. <em>OWN IT.</em></p>

        <p class="mb-6">Whether it's using REFLEX at 10 PM or revising a subject or taking a break or learning something new, build a routine that <em>feels right</em>. And trust it. Because if you can stay consistent on your terms, the results will follow.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">You're Not Starting Over—You're Starting Better</h2>
        <p class="mb-6">It's true. <em>You're not at zero</em>. You've sat for the exam. You've felt the pressure. You've made mistakes—and now you know what to fix.</p>

        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold text-orange-800 mb-3">Now You Need:</h3>
          <ul class="text-orange-700 space-y-2">
            <li>• A solid game plan</li>
            <li>• A clear mind</li>
            <li>• A reliable study tool (like REFLEX)</li>
            <li>• And the courage to try again</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Final Thoughts: This Is Your Redemption Arc</h2>
        <p class="mb-6">A second attempt isn't about proving the world wrong. It's about proving yourself right.</p>

        <p class="mb-6">So here's what I'd say:</p>
        <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
          <li>Focus on targeted NEET PG/INICET preparation</li>
          <li>Use PYQs like your life depends on it</li>
          <li>Make PREVIOUS YEAR TOPICS your daily companion</li>
          <li>Trust your journey—even when it gets tough</li>
        </ul>

        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 my-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Remember This Always:</h3>
          <p class="text-lg text-gray-700 font-medium leading-relaxed">Your second attempt is your opportunity to show that resilience, not perfection, defines a great doctor. Embrace this journey with confidence, and let your determination be the driving force that leads you to success.</p>
          <p class="text-xl font-bold text-blue-600 mt-4 text-center">"This is your redemption arc!"</p>
        </div>

        <p class="text-lg leading-relaxed">A second attempt isn't a sign of weakness—it's a testament to your determination. Every day you choose to continue is a victory. Trust the process, stay consistent, and remember that your medical journey is unique to you.</p>
      `
    }
  };

  const post = blogContent[postId as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bài viết không tìm thấy</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Quay lại Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Quay lại Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-gray-600 mb-6 space-x-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye size={16} className="mr-2" />
                <span className="text-sm">{post.views}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bài viết hữu ích?</h3>
                  <p className="text-gray-600">Chia sẻ với bạn bè cùng ngành y</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                  <Share2 size={18} className="mr-2" />
                  Chia sẻ
                </button>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Quay lại tất cả bài viết
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;