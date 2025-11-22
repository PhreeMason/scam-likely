import Image from 'next/image';
import ScamSection from '@/components/ScamSection';
import StatCard from '@/components/StatCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scamming 101 with Omar
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your guide to staying safe in a digital world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* By The Numbers */}
        <ScamSection title="By The Numbers" id="scale">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <StatCard number="$12.5B" description="Lost to fraud in 2024 (25% increase from 2023)" />
            <StatCard number="77%" description="Of Americans encountered a scam in the last year" />
            <StatCard number="73%" description="Of U.S. adults have experienced an online scam or attack" />
            <StatCard number="1 in 5" description="People who reported fraud lost money (38% in 2024)" />
            <StatCard number="$1,087" description="Average loss per victim" />
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="/ftc-scam-chart.png"
              alt="Chart showing rising fraud losses 2020-2024 (Source: FTC Consumer Sentinel Network Data Book 2024)"
              fill
              className="object-contain"
            />
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
            <p className="font-semibold mb-2">Data Sources:</p>
            <ul className="text-sm space-y-1">
              <li>• FTC Consumer Sentinel Network Data Book 2024</li>
              <li>• FTC Explore Data Dashboard</li>
            </ul>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Greatest Hits */}
        <ScamSection title="The Greatest Hits" id="common-scams">

          {/* Imposter Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">1. Imposter Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Scammers impersonate government agencies, companies, or banks</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>IRS, Social Security Administration</li>
                <li>Amazon, Microsoft, Apple</li>
                <li>Your bank or credit card company</li>
              </ul>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p className="italic">"This is the Social Security Administration. Your number has been suspended due to suspicious activity. Press 1 to speak with an agent or you'll be arrested."</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2">🚨 Red Flags:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Threatens arrest or legal action</li>
                <li>Demands immediate payment</li>
                <li>Asks for gift cards, wire transfers, or cryptocurrency</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>$2.95 billion lost in 2024 | $800 median loss</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://i.redd.it/a5o2biomb3i81.jpg"
                alt='Phone with fake caller ID showing "Social Security Administration"'
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Wrong Number Text Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">2. "Wrong Number" Text Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Innocent-looking text → You reply "wrong number" → Friendly conversation → Romance or investment scam</p>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Scammer:</span> "Hi Sarah! Looking forward to dinner tonight 😊"</p>
                <p><span className="font-semibold">You:</span> "Sorry, wrong number"</p>
                <p><span className="font-semibold">Scammer:</span> "Oh my mistake! I'm new to the area, where are you from?"</p>
                <p className="italic">[Weeks later]: "I've been making great money with crypto. Let me show you..."</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>$470 million lost to text scams in 2024 (5x higher than 2020)</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://i.redd.it/a5o2biomb3i81.jpg"
                alt='Text message screenshot showing innocent "wrong number" message'
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Pig Butchering Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">3. Pig Butchering Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Long-term investment fraud</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Scammer builds fake relationship over weeks/months</li>
                <li>Convinces you to invest in fake crypto platform</li>
                <li>When you try to withdraw → money is gone</li>
                <li>Name comes from "fattening a pig before slaughter"</li>
              </ul>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p>Meet "James" on dating app → talks daily for months → shows you his "successful" crypto investments → guides you to fake trading platform → you deposit $50k → platform shows fake profits → you try to withdraw → site disappears.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold mb-2">Statistics:</p>
              <ul className="space-y-1">
                <li>• <strong>$5.7 billion</strong> lost to investment scams in 2024</li>
                <li>• <strong>$75 billion</strong> lost globally 2020-2024</li>
                <li>• One bank president lost <strong>$47 million</strong></li>
              </ul>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://nz.norton.com/content/dam/blogs/images/norton/am/tinder-scams-1.png"
                alt="Dating app profile or fake cryptocurrency trading platform"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Online Shopping Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">4. Online Shopping Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <ul className="list-disc list-inside">
                <li>Fake websites</li>
                <li>Products never delivered</li>
                <li>Items don't match description</li>
              </ul>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p>See ad for designer purse at 70% off → purchase → receive cheap knockoff or nothing at all.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>Second most reported scam category</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://assets.f-secure.com/i/opengraph/articles/4-sneaky-online-shopping-scams.jpg"
                alt='Fake online shopping website or "too good to be true" product ad'
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Fake Package Delivery Texts */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">5. Fake Package Delivery Texts</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Text claiming package issue → Link to "reschedule delivery" or "pay customs fee"</p>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p className="italic">"USPS: Your package is waiting. Confirm delivery: [malicious link]"</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>Most commonly reported type of text scam</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://static01.nyt.com/images/2020/08/27/business/27wheels1/merlin_143401959_cdb1e5e7-fdb1-4097-8b0f-ed2ed043fbb5-mediumSquareAt3X.jpg"
                alt="Fake USPS/FedEx text message"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Job & Employment Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">6. Job & Employment Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <ul className="list-disc list-inside">
                <li>Fake job offers</li>
                <li>"Task scams" (do simple tasks, then invest your own money)</li>
                <li>Pyramid schemes</li>
              </ul>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p className="italic">"Work from home! Make $5,000/week doing simple tasks. Just pay $200 for training materials first."</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>$501 million lost in 2024 (up from $90 million in 2020)</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://www.snbonline.com/filesimages/news/Online-Job-Scams.jpg"
                alt='Fake job posting or "work from home" ad'
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Romance Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">7. Romance Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Fake dating profile → Build emotional connection → Emergency excuse → Request money</p>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p>Meet online → daily messages for months → "I need $5,000 for emergency surgery" or "Help me pay for plane ticket to visit you."</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Note:</p>
              <p>Often linked to pig butchering; targets people seeking companionship</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://www.investright.org/wp-content/uploads/2024/04/pig-butchering-576x1024.png"
                alt="Fake dating profile with stock photo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Tech Support Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">8. Tech Support Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <ul className="list-disc list-inside">
                <li>Pop-up warning: "Your computer is infected!"</li>
                <li>Phone call claiming to be Microsoft/Apple</li>
                <li>Charge you to "fix" non-existent problem or install malware</li>
              </ul>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p>Pop-up: "VIRUS DETECTED! Call 1-888-XXX-XXXX immediately!" → you call → they charge $500 to "fix" non-existent problem or install malware.</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://media.nbcboston.com/2022/10/computer-popup-tech-scam.jpg?quality=85&strip=all&resize=1200%2C675"
                alt="Fake virus warning pop-up"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Cryptocurrency ATM Scams */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">9. Cryptocurrency ATM Scams</h3>

            <div className="mb-4">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>Scammer poses as bank/government/tech support → Tells you to deposit cash into Bitcoin ATM to "protect your money"</p>
            </div>

            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">Example:</p>
              <p className="italic">"This is your bank's fraud department. Someone is trying to access your account. Go to the Bitcoin ATM at your local gas station and transfer your money to this secure wallet address."</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <p className="font-semibold">Statistics:</p>
              <p>Crypto scam losses tripled 2021-2023; $1.65 billion in 2024</p>
            </div>

            <div className="my-6 rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://consumer.ftc.gov/system/files/styles/social_standard/private/consumer_ftc_gov/images/Impersonator-SocMed-1200x630-7-Bitcoin.png?h=ec041e41&itok=sBfLlAEz"
                alt="Bitcoin ATM at gas station/convenience store"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Universal Red Flags */}
        <ScamSection title="Universal Red Flags" id="warning-signs">
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border-2 border-red-300 dark:border-red-700">
            <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400">🚨 STOP if they:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Create <strong>urgency</strong> ("Act now!" "Limited time!")</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Demand <strong>specific payment</strong> (gift cards, wire transfer, crypto, cash)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Ask you to keep it <strong>secret</strong> ("Don't tell anyone")</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span><strong>Pressure</strong> you to decide immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Claim you'll be <strong>arrested</strong> or face legal action</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Contact you <strong>unexpectedly</strong> about problems you didn't know about</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-3 text-2xl">•</span>
                <span>Ask for <strong>personal information</strong> you didn't initiate sharing</span>
              </li>
            </ul>
          </div>

          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://www.project44.com/wp-content/uploads/2023/05/shutterstock_496174552.jpg"
              alt="Red flags icon or warning sign list"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Your Defense Playbook */}
        <ScamSection title="Your Defense Playbook" id="protection">
          <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400">Simple Steps:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Hang up and verify</strong> - Call the company back using number YOU look up</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Never click links</strong> in unexpected texts/emails</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Block unknown callers</strong> - Set phone to send them to voicemail</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Don't respond to "wrong number" texts</strong> - Just delete</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Check bank accounts</strong> regularly for unauthorized charges</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Use credit cards</strong> (not debit) for better fraud protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Enable two-factor authentication</strong> on important accounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Freeze your credit</strong> at all three bureaus (free!)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Be skeptical</strong> of anyone asking for gift cards/crypto/wire transfers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-3 text-2xl">✅</span>
                <span><strong>Talk to someone</strong> you trust before sending money</span>
              </li>
            </ul>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* What To Do If It Happens */}
        <ScamSection title="What To Do If It Happens" id="reporting">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-400">Report here:</h3>
            <ul className="space-y-2 text-lg">
              <li><strong>FBI Internet Crime Complaint Center:</strong> www.ic3.gov</li>
              <li><strong>FTC:</strong> ReportFraud.ftc.gov or 877-382-4357</li>
              <li><strong>National Elder Fraud Hotline:</strong> 833-372-8311</li>
              <li><strong>Local police department</strong></li>
              <li><strong>Your bank immediately</strong></li>
            </ul>
          </div>

          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://i.redd.it/a5o2biomb3i81.jpg"
              alt="Phone with emergency hotline numbers"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Remember Section */}
        <ScamSection title="Remember" id="remember">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
            <p className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">
              If it sounds too good to be true, it is.
            </p>

            <div className="text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-4 text-lg">Legitimate organizations:</p>
              <ul className="space-y-2">
                <li>❌ Won't threaten you</li>
                <li>❌ Won't demand gift cards/crypto</li>
                <li>❌ Won't pressure you to act immediately</li>
                <li>❌ Won't ask you to keep secrets</li>
              </ul>

              <p className="text-2xl font-bold mt-8 text-center text-blue-700 dark:text-blue-300">
                When in doubt, STOP. VERIFY. PROTECT.
              </p>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://i00.eu/img/602/1024x1024/85cuot4y/116161.jpg"
              alt="Community helping each other or shield protecting people"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Bank President Story */}
        <ScamSection title="The Bank President Story" id="bank-president">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">Shan Hanes</h3>
            <p className="mb-4">(Pronounced "Shane"), age 53, was the CEO of Heartland Tri-State Bank in Elkhart, Kansas.</p>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">What Happened:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Started getting scammed in late 2022 through a pig butchering scheme</li>
                <li>Over 8 weeks in 2023, he embezzled <strong className="text-purple-700 dark:text-purple-400">$47.1 million</strong> from his own bank</li>
                <li>Sent wire transfers ranging from $5,000 to $10 million to scammers' cryptocurrency wallets</li>
                <li>Also stole from his local church, an investment club, and his own daughter's college fund</li>
                <li>He received <strong>NOTHING back</strong>—lost everything</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">Consequences:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>His bank collapsed—one of only 5 U.S. banks to fail in 2023</li>
                <li>Sentenced to <strong className="text-purple-700 dark:text-purple-400">24+ years in prison</strong> (293 months)</li>
                <li>His neighbor, who tried to warn him, called his actions "pure evil"</li>
                <li>He appeared "visibly shocked" when sentenced and was taken into custody immediately</li>
              </ul>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
              <p className="font-semibold mb-2">Key Detail:</p>
              <p>Hanes had so much influence in his small community that bank employees were afraid to question him, even when his wire transfer requests seemed suspicious.</p>
            </div>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Behind the Scams - Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Behind the Scams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Understanding the Global Criminal Networks
          </p>
        </div>

        {/* Who's Running These Scams */}
        <ScamSection title="Who's Running These Scams?" id="behind-scams">
          <div className="bg-slate-50 dark:bg-slate-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">The Reality:</h3>
            <p className="mb-6"><strong>Transnational criminal organizations</strong> based in Southeast Asia</p>

            <div className="mb-6">
              <p className="font-semibold mb-3">Key Locations:</p>
              <ul className="space-y-2">
                <li>🇰🇭 <strong>Cambodia</strong> (Sihanoukville - former gambling town)</li>
                <li>🇲🇲 <strong>Myanmar</strong> (areas outside government control due to civil war)</li>
                <li>🇱🇦 <strong>Laos</strong></li>
                <li>🇵🇭 <strong>Philippines</strong></li>
                <li>🇹🇭 <strong>Thailand</strong></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded">
                <p className="font-semibold">Scale:</p>
                <p>Hundreds of thousands of people are trapped in scam centers</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded">
                <p className="font-semibold">Profits:</p>
                <p>Scam operations generate an estimated <strong>40% of the combined GDP</strong> of Cambodia, Laos, and Myanmar</p>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://cdn.britannica.com/59/261859-050-DD2A279C/Southeast-asia-cambodia-laos-myanmar-thailand-vietnam-malaysia-singapore-brunei-indonesia-philippines-east-timor.jpg"
              alt="Map of Southeast Asia highlighting Cambodia, Myanmar, Laos, Philippines, and Thailand"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Scam Compounds */}
        <ScamSection title="The Scam Compounds" id="compounds">
          <div className="bg-slate-50 dark:bg-slate-900/20 p-8 rounded-lg">
            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">Advertised as:</p>
              <p className="text-xl">"Technology Parks" or "Digital Companies"</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">Reality:</p>
              <p className="text-xl text-red-600 dark:text-red-400">Prison-like forced labor camps</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-3">What's Inside:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Massive buildings with hundreds/thousands of workers</li>
                <li>High fences, barbed wire, security guards</li>
                <li>Rows of desks with computers and phones</li>
                <li>Workers monitored 24/7</li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/12-06-2024-UNODC-Philippines-2.jpg/image1440x560cropped.jpg"
              alt="Photos of actual scam compound buildings - massive structures with high security fences"
              fill
              className="object-contain"
            />
          </div>
          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://www.globaldetentionproject.org/wp-content/uploads/2023/06/Detainees-in-Cambodia-Vice.webp"
              alt="Rows of workers at computer desks inside a scam compound"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Scammers Are ALSO Victims */}
        <ScamSection title="The Scammers Are ALSO Victims" id="trafficked-workers">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg">
            <p className="text-xl mb-6 font-semibold text-amber-800 dark:text-amber-300">
              Most scammers are victims of <strong>human trafficking</strong>
            </p>

            <div className="mb-8">
              <p className="font-semibold text-lg mb-3">How It Happens:</p>

              <div className="space-y-4">
                <div className="bg-white dark:bg-amber-900/40 p-4 rounded">
                  <p className="font-semibold mb-2">1. The Lure:</p>
                  <p>Job ads on Facebook/Instagram promising high-paying tech jobs</p>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    <li>• "Customer service representative - $3,000/month"</li>
                    <li>• "High salary and swimming pool"</li>
                    <li>• "Work from home opportunity"</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-amber-900/40 p-4 rounded">
                  <p className="font-semibold mb-2">2. The Trap:</p>
                  <p>Victims arrive and discover it's a scam operation</p>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    <li>• Passports confiscated</li>
                    <li>• Locked in compounds</li>
                    <li>• Cannot leave</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-amber-900/40 p-4 rounded">
                  <p className="font-semibold mb-2">3. The Force:</p>
                  <p>Workers forced to scam under threat of violence</p>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    <li>• Beaten for not meeting quotas</li>
                    <li>• Tortured for trying to escape</li>
                    <li>• Sold between compounds</li>
                    <li>• Families must pay ransom for release</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 dark:bg-amber-900/40 p-4 rounded">
              <p className="font-semibold mb-2">Who Gets Trafficked:</p>
              <ul className="space-y-1">
                <li>• Young people from across Asia seeking jobs</li>
                <li>• 58 survivors interviewed by Amnesty International (8 nationalities)</li>
                <li>• Includes 9 children</li>
                <li>• 336+ documented victims in Cambodia alone</li>
              </ul>
            </div>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* A Day in a Scam Center */}
        <ScamSection title="A Day in a Scam Center" id="daily-reality">
          <div className="bg-slate-50 dark:bg-slate-900/20 p-8 rounded-lg">
            <p className="text-lg mb-6 font-semibold">Daily Reality for Trafficked Workers:</p>

            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2">Work Schedule:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>12-16 hour shifts, 7 days a week</li>
                  <li>Strict daily quotas (amount must be scammed)</li>
                  <li>Management teams supervise and train workers</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">What They're Forced to Do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Send hundreds of messages per day on dating apps, social media</li>
                  <li>Build fake relationships with victims</li>
                  <li>Follow scripts to manipulate victims</li>
                  <li>Some workers are attractive models who video chat with victims</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                <p className="font-semibold mb-2 text-red-700 dark:text-red-400">Punishments for Failure:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Physical beatings</li>
                  <li>Torture</li>
                  <li>"Unimaginable violence on a daily basis"</li>
                  <li>Cannot eat or sleep until quota met</li>
                  <li>Sold to another compound</li>
                </ul>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded italic text-center">
                <p className="font-semibold">Quote from UN:</p>
                <p className="text-lg mt-2">"There's a huge amount of human suffering on this compound."</p>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://www.globaldetentionproject.org/wp-content/uploads/2023/06/Detainees-in-Cambodia-Vice.webp"
              alt="Rows of workers at computer desks (from seized compound photos)"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Criminal Organizations */}
        <ScamSection title="The Criminal Organizations" id="criminal-orgs">
          <div className="bg-slate-50 dark:bg-slate-900/20 p-8 rounded-lg">
            <div className="mb-6">
              <p className="font-semibold text-lg mb-3">Leadership:</p>
              <p>Overseas Chinese criminal syndicates</p>
            </div>

            <div className="mb-6 bg-red-50 dark:bg-red-900/20 p-4 rounded">
              <p className="font-semibold text-lg mb-3">Example - Prince Group (Cambodia):</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Run by Chen Zhi (founder/chairman)</li>
                <li>Operates <strong>at least 10 scam centers</strong> in Cambodia</li>
                <li>Indicted by U.S. Department of Justice in October 2025</li>
                <li>U.S. Treasury sanctioned <strong>146 targets</strong> within Prince Group organization</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-3">How They Operate:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Highly organized with management structures</li>
                <li>Training programs for new "recruits"</li>
                <li>Quality control and performance metrics</li>
                <li>Money laundering operations</li>
                <li>Connections to corrupt local officials</li>
              </ul>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
              <p className="font-semibold mb-2">Government Response:</p>
              <ul className="space-y-2">
                <li>• Amnesty International found evidence of <strong>Cambodian government complicity</strong></li>
                <li>• Police coordination with compound bosses</li>
                <li>• Authorities "deliberately ignoring" human rights abuses</li>
                <li>• Myanmar junta recently forced to crack down due to international pressure (Nov 2025)</li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://www.project44.com/wp-content/uploads/2023/05/shutterstock_496174552.jpg"
              alt="Organizational chart or organized crime concept image"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Recent Government Action */}
        <ScamSection title="Recent Government Action" id="govt-action">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">U.S. Cracking Down (2025):</h3>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">September 2025:</p>
                <p>U.S. Treasury Department sanctioned companies and individuals operating scam centers in Myanmar and Cambodia</p>
              </div>

              <div>
                <p className="font-semibold">October 2025:</p>
                <p>Prince Group and Chen Zhi indicted on wire fraud and money laundering charges</p>
              </div>

              <div>
                <p className="font-semibold">November 2025:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>U.S. and U.K. took <strong>largest action ever</strong> - sanctioned 146 targets</li>
                  <li>U.S. Attorney launched <strong>"Scam Center Strike Force"</strong></li>
                  <li>Treasury sanctioned Burma armed groups linked to scam operations</li>
                </ul>
              </div>

              <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
                <p className="font-semibold mb-2">International Efforts:</p>
                <ul className="space-y-1">
                  <li>• UN Human Rights experts called it a "human rights crisis"</li>
                  <li>• Thai forces shelled scam centers during Cambodia-Thai conflict (2025)</li>
                  <li>• Global pressure forcing Myanmar junta to take action</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                <p className="font-semibold">The Challenge:</p>
                <p>Criminal syndicates described as "ruthless transnational organized crime" that thrive on corruption</p>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://dims.apnews.com/dims4/default/5253deb/2147483647/strip/false/crop/8640x5760+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6a%2F93%2Fd6ffbd1c1cf17c9848a2dcc5265b%2F7e997a51476f4203be3dbd1895cf63fb"
              alt="U.S. Treasury or Department of Justice seal/logo"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Both Sides Are Human */}
        <ScamSection title="Both Sides Are Human" id="both-victims">
          <div className="bg-teal-50 dark:bg-teal-900/20 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-teal-900/40 p-6 rounded">
                <h3 className="font-bold text-lg mb-3 text-teal-700 dark:text-teal-400">Victims in America:</h3>
                <ul className="space-y-2">
                  <li>• Losing life savings, retirement funds, homes</li>
                  <li>• Suffering emotional trauma and shame</li>
                  <li>• Average American lost $1,087 to scams in 2024</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-teal-900/40 p-6 rounded">
                <h3 className="font-bold text-lg mb-3 text-teal-700 dark:text-teal-400">Victims in Southeast Asia:</h3>
                <ul className="space-y-2">
                  <li>• Kidnapped and trafficked for forced labor</li>
                  <li>• Beaten and tortured daily</li>
                  <li>• Cannot escape or contact families</li>
                  <li>• Living in modern slavery</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded mb-6">
              <h3 className="font-bold text-lg mb-3 text-red-700 dark:text-red-400">The Real Criminals:</h3>
              <ul className="space-y-2">
                <li>• Transnational organized crime syndicates</li>
                <li>• Corrupt officials enabling operations</li>
                <li>• Criminal bosses profiting billions</li>
              </ul>
            </div>

            <div className="bg-teal-100 dark:bg-teal-900/40 p-6 rounded">
              <h3 className="font-bold text-lg mb-3">What We Can Do:</h3>
              <ul className="space-y-2">
                <li>• <strong>Report scams</strong> (helps authorities track criminal networks)</li>
                <li>• <strong>Spread awareness</strong> (prevents more victims)</li>
                <li>• <strong>Support anti-trafficking organizations</strong></li>
                <li>• <strong>Never blame victims</strong> (on either side)</li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://i00.eu/img/602/1024x1024/85cuot4y/116161.jpg"
              alt="Two images side-by-side - American victim + trafficked worker, with criminal organization symbol in middle"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Why This Matters */}
        <ScamSection title="Why This Matters" id="why-matters">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-lg">
            <p className="text-xl mb-6 font-semibold">Understanding the Full Picture:</p>

            <div className="mb-6">
              <p className="mb-3">When you receive that "wrong number" text:</p>
              <div className="space-y-2 ml-4">
                <p>❌ <strong>Not:</strong> Just a person trying to steal</p>
                <p>✅ <strong>Reality:</strong> Likely forced under threat of violence</p>
              </div>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-6 rounded mb-6">
              <p className="font-semibold mb-3">This doesn't mean:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Don't protect yourself (still report and block!)</li>
                <li>Feel guilty for not engaging</li>
                <li>Send money (that only funds criminals)</li>
              </ul>
            </div>

            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-6 rounded mb-6">
              <p className="font-semibold mb-3">This DOES mean:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Have compassion for all victims</li>
                <li>Report scams (helps rescue trafficked workers)</li>
                <li>Understand the global scale of organized crime</li>
                <li>Support efforts to shut down these operations</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-indigo-900/40 p-6 rounded">
              <p className="font-semibold mb-3">The Fight:</p>
              <p className="mb-2">Law enforcement worldwide is working to:</p>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Rescue trafficking victims</li>
                <li>Prosecute criminal leaders</li>
                <li>Shut down compound operations</li>
                <li>Prevent future scams</li>
              </ul>
            </div>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* North Korean Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            North Korean IT Worker Scam
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            State-Sponsored Cyber Warfare Disguised as Remote Work
          </p>
        </div>

        {/* The North Korean Remote Work Conspiracy */}
        <ScamSection title="The North Korean Remote Work Conspiracy" id="nk-overview">
          <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg">
            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">What It Is:</p>
              <p>North Korean operatives get remote IT jobs using fake identities → Fund weapons programs</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-3">The Scale:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-red-900/40 p-4 rounded">
                  <p className="font-bold text-red-700 dark:text-red-400">320+ companies</p>
                  <p className="text-sm">Infiltrated in past 12 months (220% increase)</p>
                </div>
                <div className="bg-white dark:bg-red-900/40 p-4 rounded">
                  <p className="font-bold text-red-700 dark:text-red-400">Nearly every Fortune 500</p>
                  <p className="text-sm">Has unknowingly hired North Korean workers</p>
                </div>
                <div className="bg-white dark:bg-red-900/40 p-4 rounded">
                  <p className="font-bold text-red-700 dark:text-red-400">$250-600M per year</p>
                  <p className="text-sm">Generated since 2018</p>
                </div>
                <div className="bg-white dark:bg-red-900/40 p-4 rounded">
                  <p className="font-bold text-red-700 dark:text-red-400">90%+ of applicants</p>
                  <p className="text-sm">For some IT jobs are North Korean operatives</p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
              <p className="font-semibold">Run by:</p>
              <p>North Korea's intelligence agency - <strong>"Department 53"</strong></p>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://d.ibtimes.co.uk/en/full/1394568/kim-jong-un-designing-institute-korean-peoples-army.jpg"
              alt="North Korea flag with computer/hacker imagery, or Kim Jong Un"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* How The Scam Works */}
        <ScamSection title="How The Scam Works - Step by Step" id="nk-how">
          <div className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">1. Training & Selection</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Elite graduates from Kim Chaek University of Technology recruited</li>
                  <li>Trained in coding, hacking, foreign languages</li>
                  <li>Deployed to China, Russia, UAE, Nigeria, Cambodia</li>
                  <li>Each worker required to earn <strong>$10,000/month</strong></li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">2. Steal Identities</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Use stolen Social Security numbers from real Americans</li>
                  <li>Often from deceased U.S. citizens</li>
                  <li>Create fake driver's licenses, utility bills, passwords</li>
                  <li><strong>Red Flag:</strong> Many use same recognizable tablecloth in ID photo backgrounds</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">3. Apply for Remote Jobs</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Target IT roles: software engineering, web design, full-stack development</li>
                  <li>Apply on LinkedIn, Upwork, freelance sites</li>
                  <li>Use AI to create fake profile photos and deepfakes for interviews</li>
                  <li>One person operating <strong>12 different fake personas</strong> at once</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">4. The Interview</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Team effort: "Interviewers" with perfect English conduct video calls</li>
                  <li>Different person (the actual developer) takes over after being hired</li>
                  <li>Use AI for deepfakes and voice synthesis</li>
                  <li>Can pass technical coding tests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://d.ibtimes.co.uk/en/full/1394568/kim-jong-un-designing-institute-korean-peoples-army.jpg"
              alt="Flowchart showing the 4 steps of the North Korean IT worker scheme"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Laptop Farm Operation */}
        <ScamSection title="The Laptop Farm Operation" id="laptop-farms">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg">
            <div className="mb-6">
              <p className="font-semibold text-lg mb-2">What's a Laptop Farm?</p>
              <p>American accomplice's home with dozens of company laptops → Remotely operated by North Koreans overseas</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-lg mb-3">How It Works:</p>
              <ol className="space-y-2 list-decimal list-inside">
                <li>North Korean gets hired by U.S. company</li>
                <li>Requests laptop shipped to U.S. address (claims "family emergency" or recent move)</li>
                <li>American facilitator receives laptop at their home</li>
                <li>Installs remote desktop software so North Korean can access it from abroad</li>
                <li>North Korean logs in daily, appearing to work from U.S.</li>
                <li>Paycheck goes to U.S. bank account → laundered to North Korea through crypto/wire transfers</li>
              </ol>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/40 p-6 rounded mb-6">
              <p className="font-semibold text-lg mb-3">Real Case - Christina Chapman (Arizona):</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Ran <strong>90+ laptops</strong> from her home 2020-2023</li>
                <li>Helped North Korea earn <strong>$17+ million total</strong></li>
                <li>Sentenced to <strong>8.5 years in prison</strong> (July 2025)</li>
                <li>Companies included: car manufacturers, Silicon Valley tech firms, U.S. media, aerospace, Fortune 500s</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
              <p className="font-semibold mb-2">FBI Raid (July 2025):</p>
              <ul className="space-y-1">
                <li>• Searched <strong>21 laptop farms</strong> across 14 states</li>
                <li>• Seized <strong>137 laptops</strong></li>
              </ul>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/North_Korean_Laptop_Farm_%2801%29.jpg"
              alt="Room with multiple laptops set up - showing a laptop farm operation"
              fill
              className="object-contain"
            />
          </div>
          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://dims.apnews.com/dims4/default/5253deb/2147483647/strip/false/crop/8640x5760+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6a%2F93%2Fd6ffbd1c1cf17c9848a2dcc5265b%2F7e997a51476f4203be3dbd1895cf63fb"
              alt="FBI raid concept or seized equipment"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* The Malicious Intent */}
        <ScamSection title="The Malicious Intent - Beyond Just Money" id="nk-threats">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Three Major Threats:</h3>

            <div className="space-y-6">
              <div className="bg-white dark:bg-orange-900/40 p-6 rounded">
                <h4 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-400">1. Data Theft & Espionage</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Access to proprietary company code and sensitive data</li>
                  <li>Copy entire GitHub repositories to personal accounts</li>
                  <li>Steal customer information, trade secrets, defense technologies</li>
                  <li>Particular interest in: AI tech, drone manufacturing, defense contracts</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-orange-900/40 p-6 rounded">
                <h4 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-400">2. Malware & Hacking</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Install malware once inside company networks</li>
                  <li>Coordinate with APT 45 (notorious North Korean hacking group)</li>
                  <li>Lazarus Group involvement (cryptocurrency hacks)</li>
                  <li>Gain persistent access for future attacks</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-orange-900/40 p-6 rounded">
                <h4 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-400">3. Extortion</h4>
                <ul className="space-y-2 list-disc list-inside">
                  <li>When discovered, threaten to release stolen data unless paid</li>
                  <li>Hold proprietary code hostage for ransom</li>
                  <li>Publicly release company code if demands not met</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded mt-6 italic text-center">
              <p className="font-semibold">Quote from FBI Warning (2025):</p>
              <p className="mt-2">"North Korean IT workers have extorted victims by holding stolen proprietary data and code hostage until companies meet ransom demands."</p>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden relative w-full h-96">
            <Image
              src="https://www.project44.com/wp-content/uploads/2023/05/shutterstock_496174552.jpg"
              alt="Stolen data/ransomware concept image or warning symbol"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />


        {/* Recent Cases & Government Action */}
        <ScamSection title="Recent Cases & Government Action" id="nk-cases">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Major Cases (2025):</h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">November 2025:</p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>5 Americans</strong> plead guilty to running laptop farms and ID theft schemes</li>
                  <li>• Ukrainian national managed <strong>871 proxy identities</strong> and 3+ U.S. laptop farms</li>
                  <li>• Another Ukrainian pleaded guilty for DC laptop farm operation</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">August 2025:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Number of companies infiltrated jumped <strong>220%</strong> in 12 months</li>
                  <li>• CrowdStrike investigates <strong>one incident per day</strong></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">July 2025:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Christina Chapman sentenced to 8+ years</li>
                  <li>• DOJ seized hundreds of accounts, websites, laptops</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/40 p-6 rounded mb-4">
              <p className="font-semibold mb-3">Government Response:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>FBI launched major investigation and raids</li>
                <li>U.S. Treasury sanctioning North Korean institutions and enablers</li>
                <li>International coordination to disrupt operations</li>
                <li>Companies now sharing threat intelligence</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
              <p className="font-semibold">The Problem:</p>
              <p>Operations expanding to Europe as U.S. companies become more alert</p>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden h-64 relative">
            <Image
              src="https://dims.apnews.com/dims4/default/5253deb/2147483647/strip/false/crop/8640x5760+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6a%2F93%2Fd6ffbd1c1cf17c9848a2dcc5265b%2F7e997a51476f4203be3dbd1895cf63fb"
              alt="Department of Justice or FBI seal"
              fill
              className="object-contain"
            />
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Key Takeaways */}
        <ScamSection title="Key Takeaways" id="takeaways">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">For Job Seekers/Employees:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Be skeptical of "too good to be true" remote job offers</li>
                  <li>Verify company legitimacy before applying</li>
                  <li>Don't download "assessment tests" from job offers</li>
                  <li>Report suspicious job postings</li>
                </ul>
              </div>
            </div>
          </div>
        </ScamSection>

        <hr className="my-16 border-gray-300 dark:border-gray-700" />

        {/* Resources */}
        <ScamSection title="Additional Resources" id="resources">
          <div className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-lg">
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Official Sources & Data:</h3>
              <ul className="space-y-2">
                <li>• <a href="https://consumer.ftc.gov/scams" className="text-blue-600 dark:text-blue-400 hover:underline">FTC Scam Alerts</a></li>
                <li>• <a href="https://www.ftc.gov/news-events/data-visualizations" className="text-blue-600 dark:text-blue-400 hover:underline">FTC Data Visualizations</a></li>
                <li>• <a href="https://consumer.ftc.gov/articles/how-avoid-scam" className="text-blue-600 dark:text-blue-400 hover:underline">How to Avoid Scams</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Reporting:</h3>
              <ul className="space-y-2">
                <li>• <strong>FBI IC3:</strong> <a href="https://www.ic3.gov" className="text-blue-600 dark:text-blue-400 hover:underline">www.ic3.gov</a></li>
                <li>• <strong>FTC:</strong> <a href="https://reportfraud.ftc.gov" className="text-blue-600 dark:text-blue-400 hover:underline">ReportFraud.ftc.gov</a> or 877-382-4357</li>
                <li>• <strong>National Elder Fraud Hotline:</strong> 833-372-8311</li>
                <li>• <strong>Anti-Trafficking Hotline:</strong> 1-888-373-7888</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Research & Reports:</h3>
              <ul className="space-y-2">
                <li>• Amnesty International Report: "I Was Someone Else's Property" (240-page report on Cambodia scam compounds)</li>
                <li>• U.S. Treasury Sanctions: <a href="https://home.treasury.gov/news" className="text-blue-600 dark:text-blue-400 hover:underline">home.treasury.gov/news</a> (search "scam centers")</li>
                <li>• UN Office on Drugs and Crime: Reports on Southeast Asia criminal operations</li>
              </ul>
            </div>
          </div>
        </ScamSection>

        {/* Footer */}
        <div className="mt-20 mb-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Safe. Stay Informed.
            </h2>
            <p className="text-xl text-blue-100">
              Thanks for coming to my TED talk
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
