import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const TosPage: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to hash if present on page load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  const siteData = {
    siteName: "Reflex",
    companyFullName: "GoodEd Technologies Private Limited",
    companyShortName: "GoodEd",
    companyAddress: "S-15, 2nd Floor, Uphar Cinema Market above Red Chilli Restaurant, Green Park Extension, New Delhi- 110016",
    siteUrl: "", // Use internal route paths here if applicable, else leave empty
    appUrl: "/external-app-link", // We'll link external URLs below with normal <a>
  }

  // Helper to decide whether to use <Link> (internal) or <a> (external)
  // Since react-router Link does NOT support external URLs, for external use <a>
  // siteUrl assumed internal or empty, appUrl is external https link
  const ConditionalLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    // If empty or not starting with '/', treat as external or invalid, use <a>
    const isExternal = /^https?:\/\//.test(to)
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    // If no valid 'to', render just text without link
    if (!to || to.trim() === '') {
      return <>{children}</>
    }
    return <Link to={to}>{children}</Link>
  }

  return (
    <div className="px-6 py-8">
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold py-16 px-8">TERMS OF USE</h1>

          <p>
            We want to make your experience with us as enjoyable and rewarding as possible, and we want you to use website{' '}
            <strong><u>
              <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink>
            </u></strong>{' '}
            (“the Site”) and the{' '}
            <strong>
              <ConditionalLink to={siteData.appUrl}>{siteData.siteName}</ConditionalLink>
            </strong>{' '}
            (the “App”), alongside all of our services with complete confidence.
          </p>

          <p>Hence, we request that you read the following Terms of Use carefully.</p>

          <p className="font-bold text-lg"><u>{siteData.siteName} Content</u> – <u>Terms of Use</u></p>

          <p>
            1) This website is owned and managed by {siteData.companyFullName}, a company incorporated under the Companies Act, 1956, and having its principal place of business at­- {siteData.companyAddress}, (“{siteData.companyShortName}”). This Terms of Use Agreement (“the Agreement”) describes the terms and conditions applicable to your use of the website{' '}
            <u><ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink></u> (“the Site”) and{' '}
            <u><ConditionalLink to={siteData.appUrl}>{siteData.siteName}</ConditionalLink></u> (the “App”). You have entered into this Agreement as “the User” of the Site, and {siteData.companyShortName} has entered into this Agreement as the owner of the Site.
          </p>

          <p><u>Application and Acceptance of Terms and Conditions:</u></p>

          <p>
            2) For the purposes of this Agreement, the terms “we”, “us”, “our” and “{siteData.companyShortName}” refers to {siteData.companyFullName}. The terms “User”, “you” and “your” refers to you i.e. any person who accesses the Site for any purpose, regardless of whether said person has registered on the Site as a registered User or whether said person is a paying customer for a specific service provided by {siteData.companyShortName} or its affiliates, through{' '}
            <u><ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink></u> and {siteData.siteName}.
          </p>

          <p>The User includes the person using this Site and any legal entity, which may be represented by such person under actual or apparent authority. If the User is a business entity, they represent that:</p>

          <ul className="list-inside list-disc pl-4">
            <li>They have the authority to bind the entity to this Agreement;</li>
            <li>The address they use when registering, is the principal place of business of such business entity; and</li>
            <li>All other information submitted on the Site, as well as on affiliated websites during the registration process is true, accurate, current, and complete. For purposes of this provision, a branch or representative office will not be considered a separate entity and its principal place of business will be deemed to be that of its head office.</li>
          </ul>

          <p>
            3) The term “<strong>personal information</strong>” means information that you provide to us which personally identifies you to be contacted or identified, such as your name, phone number, email address, and any other data that is tied to such information.
          </p>

          <p>
            4) By accessing or using the Site, you hereby agree to accept the terms and conditions set forth in this Agreement as the User. You shall be bound by the terms and conditions of this Agreement with respect to your access to or use of this Site, and any further upgrade, modification, addition, or change to this Site. If you do not accept all of the terms and conditions of this Agreement, then you should not access or use this Site.
          </p>

          <p>
            5) The Agreement is applicable to the Site as a whole. However, certain sections of the Site may set out additional terms and conditions applicable for the User, which will be notified separately in such sections. Under no circumstances, shall the provisions of such terms and conditions prevail over this Agreement.
          </p>

          <p>
            6) {siteData.companyShortName} may amend this Agreement at any time by posting the amended and restated Agreement on the Site. Such amended and restated Agreement shall bind you and {siteData.companyShortName} immediately upon posting. The last revision date of the Agreement shall be mentioned at the beginning of the Agreement. Posting by {siteData.companyShortName} of the amended and restated Agreement and your continued use of the Site shall be deemed to be acceptance of the amended terms. This Agreement may not be modified except in writing by an authorised officer of {siteData.companyShortName}.
          </p>

          <p>
            7) Access to some parts of the Site and some of its features are provided to all the Users free of charge. {siteData.companyShortName} reserves the right to restrict access to any areas or features of the Site, without prior notice to any User.
          </p>

          <p>
            8) You may use this Site solely for non-commercial purposes. You agree that you shall not copy, reproduce or download any information, text, images, video clips, directories, files, databases or listings available on or through the Site and the App (hereinafter referred cumulatively to as “{siteData.siteName} Content”) for the purpose of re-selling or re-distributing, mass mailing (via emails, wireless text messages, physical mail or otherwise), operating a business that competes with the Site, or otherwise commercially exploiting the {siteData.siteName} Content. Systematic retrieval of {siteData.siteName} Content from this Site or App to create or compile, directly or indirectly, a collection, database or directory or any such compilation (whether through bots, spiders, automatic devices, or manual processes) without prior written permission from {siteData.siteName} Content is prohibited. In addition, use of the content or materials for any purpose not expressly permitted in this Agreement is prohibited.
          </p>

          <p>
            9) Some of the {siteData.siteName} Content displayed on this Site and App is provided or posted by third parties or other Users of the Site (“Third Party Content”). {siteData.siteName} Content is not the author of Third-Party Content, whether contributed by Users or paid content providers, unless otherwise expressly provided. Any Third Party Content that is not owned by {siteData.companyShortName} is the sole responsibility of the party who provides the content. {siteData.siteName} Content is not responsible for the accuracy, propriety, lawfulness, or truthfulness of any Third Party Content, and shall not be liable to any Users in connection with such User’s reliance on such Third Party Content.
          </p>

          <p>
            10) <strong><ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink></strong> is not responsible for the conduct of any User’s activities on the Site, and shall not be liable to any person in connection with any damage suffered by any person as a result of such User’s conduct.
          </p>

          <p>
            11) <strong><ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink></strong> may allow you access to content, products or services offered by third parties through hyperlinks (in the form of word link, banners, channels or otherwise) to such Third Party’s web site. You are cautioned to read such sites’ terms and conditions and privacy policies, before using such sites. You acknowledge that <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink> has no control over such third party’s web site, does not monitor such sites, and shall not be held responsible or liable to anyone for such web site, or any content, products or services made available on such a website.
          </p>

          <p>
            12) You shall not undertake any scheme to undermine the integrity of the computer systems or networks used by the Site or {siteData.companyShortName}, or those of any other you, and you shall not attempt to gain unauthorised access to such computer systems or networks.
          </p>

          <p>
            13) Please refer to the Site’s Privacy Policy Statement (mentioned below), to understand the protection and use of each User’s information in the possession of the Site’s managers, and/or their affiliates. You hereby accept the Privacy Policy and any updates and amendments thereto. You acknowledge that {siteData.companyShortName} may change the Privacy Policy from time to time, provided that {siteData.companyShortName} shall make available the updated version of the Privacy Policy on the Site at all times. Continued usage of the Site by you after such amendment shall be deemed to be your acceptance of the Privacy Policy.
          </p>

          <p>
            14) As a condition of your access to and use of the Site, you agree that you will not use the Site to infringe the intellectual property rights or other legitimate rights of others in any way. {siteData.companyShortName} will, under appropriate circumstances, terminate the accounts of Users who are infringers of the copyrights, or other intellectual property rights, or other legitimate rights of others. In addition, {siteData.companyShortName} reserves the right to terminate the account of any User upon any single infringement of the rights of other users in conjunction with use of the Site, or if {siteData.companyShortName} believes that the User’s conduct is harmful to the interests of the Site or its affiliates, or other Users, or for any other reason in {siteData.companyShortName}’s sole discretion, with or without cause.
          </p>

          <p>
            15) {siteData.companyShortName} and the Users are independent contractors, and no agency, partnership, joint venture, employer-employee or franchiser-franchisee relationship is intended or created by this Agreement.
          </p>

          <p>
            16) If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck, and the remaining provisions shall be enforced.
          </p>

          <p>
            17) Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section.
          </p>

          <p>
            18) {siteData.companyShortName}’s failure to enforce any right or failure to act with respect to any breach by a User under this Agreement will not waive that right, nor will it constitute a waiver of {siteData.companyShortName}’s right to act with respect with subsequent or similar breaches.
          </p>

          <p>
            19) {siteData.companyShortName} shall have the right to assign this Agreement to any person or entity (including any affiliates of {siteData.companyShortName}). The User may not assign, in whole or part, this Agreement to any person or entity.
          </p>

          <p>
            20) This Agreement shall be governed by the laws of India with regard to its conflict of law provisions. The parties to this Agreement hereby submit to the exclusive jurisdiction of the courts of Delhi in India.
          </p>

          <p>
            21) “Pages” are specialised sections within the Site that may be used by the User, upon being granted exclusive access and permission by <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink>, for any reason that <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink> deems appropriate at the time of granting access.
          </p>

          <p>
            22) Only the User given express permission to administer a Page may administer such Page on the Site. {siteData.companyShortName} reserves the right to block access to the Site if it suspects misuse of the administrator rights for a page.
          </p>

          <p>23) You hereby represent, warrant and agree to</p>

          <ul className="list-inside list-disc pl-4">
            <li>Provide GoodE current and complete. You hereby grant airrevocable, perpetual, worldwide and royalty- free, sub- licensable (through multiple tiers) license to {siteData.companyShortName} to display and use all information provided by you, in accordance with the purposes set forth in this Agreement and to exercise the copyright, publicity, and database rights you have in such material or information, in any media now known or not currently known.</li>
            <li>You hereby represent, warrant and agree that you have obtained all necessary third party copyright, trademark, trade secrets or patent licenses and permissions, or such other licenses or permissions as may be required in connection with any other personal or proprietary rights of any third party (including but not limited to rights of personality and rights of privacy), for any material or information you post on the Site or provide to {siteData.companyShortName} or authorise {siteData.companyShortName} to display. Third party copyrights, trademarks, trade secret rights, patents and other personal or proprietary rights affecting or relating to material or information displayed on the Site, including but not limited to rights of personality and rights of privacy, or affecting or relating to products that are offered or displayed on the Site, are hereafter referred to as “Third Party Rights.” You hereby represent, warrant and agree that you shall be solely responsible for ensuring that any material or information you post on the Site or provide to {siteData.companyShortName} or authorise {siteData.companyShortName} to display does not violate any Third Party Rights, or is posted with the permission of the owner(s) of such rights.</li>
          </ul>

          <p>24) You hereby represent, warrant and agree that information submitted for display on the Site shall not:</p>

          <ul className="list-inside list-disc pl-4">
            <li>Contain fraudulent information, or otherwise promote other illegal activities;</li>
            <li>Be part of a scheme to defraud other Users of the Site or for any other unlawful purpose;</li>
            <li>Relate to services that infringe or otherwise abet or encourage the infringement or violation of any third party’s copyright, patent, trademarks, trade secret or other proprietary right or rights of publicity or privacy, or any other Third Party Rights;</li>
            <li>Impersonate any person or entity, misrepresent yourself or your affiliation with any person or entity;</li>
            <li>Violate any applicable law, statute, ordinance or regulation;</li>
            <li>Be defamatory, libellous, unlawfully threatening or unlawfully harassing;</li>
            <li>Be obscene or contain or infer any pornography or illegal merchandising or any other content or otherwise promotes sexually explicit materials or is otherwise harmful to minors;</li>
            <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;</li>
            <li>Contain any material that constitutes unauthorised advertising or harassment (including but not limited to spamming), invades anyone’s privacy or encourages conduct that would constitute a criminal offence, give rise to civil liability, or otherwise violate any law or regulation;</li>
            <li>Solicit business from any Users in connection with a commercial activity that competes with the Site;</li>
            <li>Contain any computer viruses or other destructive devices and codes that have the effect of damaging, interfering with, intercepting or expropriating any software or hardware system, data or personal information;</li>
            <li>Link directly or indirectly to or include descriptions of goods or services or other materials that violate any law or regulation or are prohibited under this Agreement;</li>
            <li>Otherwise create any liability for <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink> or its affiliates.</li>
          </ul>

          <p>
            25) {siteData.companyShortName} reserves the right in its sole discretion to remove any material displayed on the Site which it reasonably believes is unlawful, could subject {siteData.companyShortName} to liability, violates this Agreement or is otherwise found inappropriate in {siteData.companyShortName}’s opinion. {siteData.companyShortName} reserves the right to cooperate fully with governmental authorities, private investigators and injured third parties in the investigation of any suspected criminal or civil wrongdoing. Furthermore, {siteData.companyShortName} may disclose your identity and contact information, if requested by a government or law enforcement body, an injured third party, or as a result of a subpoena or other legal action, and {siteData.companyShortName} shall not be liable for damages or results thereof and you agree not to bring any action or claim against {siteData.companyShortName} for such disclosure. In connection with any of the foregoing, {siteData.companyShortName} may suspend or terminate your account as {siteData.companyShortName} deems appropriate in its sole discretion. You agree that {siteData.companyShortName} shall have no liability to you, including no liability for consequential or any other damages, in the event {siteData.companyShortName} takes any of the actions mentioned in this clause, and that you agree to bear the risk that {siteData.companyShortName} may take such actions.
          </p>

          <p><strong><u>Liability</u></strong></p>

          <p>
            26) {siteData.companyShortName} will try to keep the Site ‘live’, bug-free, and safe, but you use it at your own risk. We are providing the Site “as is” without any express or implied warranties including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Site will be safe or secure. {siteData.companyShortName} is not responsible for the actions, content, information, or data of third parties, and you release us, our directors, officers, employees, and agents from any claims and damages, known and unknown, arising out of or in any way connected with any claim you have against any such third parties. We will not be liable to you for any lost profits or other consequential, special, indirect, or incidental damages arising out of or in connection with this statement or the site, even if we have been advised of the possibility of such damages.
          </p>

          <p>
            27) Any material downloaded or otherwise obtained through the Site, is done at your sole discretion and risk, and you are solely responsible for any damage to your computer system or loss of data that results from the download of any such material. No advice or information, whether oral or written, obtained by you from {siteData.companyShortName} or through or from the Site shall create any warranty not expressly stated herein.
          </p>

          <p>
            28) Under no circumstances shall {siteData.companyShortName} be held liable for an delay or failure or disruption of the content or services delivered through the Site resulting directly or indirectly from acts of nature, forces or causes beyond its reasonable control, including without limitation, Internet failures, computer, telecommunications or any other equipment failures, electrical power failures, strikes, labour disputes, riots, insurrections, civil disturbances, shortages of labour or materials, fires, flood, storms, explosions, acts of God, war, governmental actions, orders of domestic or foreign courts or tribunals or non-performance of third parties.
          </p>

          <p>
            29) You hereby agree to indemnify and hold harmless, {siteData.companyShortName}, its affiliates, directors, officers, and employees harmless, from any and all losses, claims, liabilities (including legal costs on a full indemnity basis) which may arise from your use of the Site (including but not limited to the display of your information on the Site) or from its breach, of any of the terms and conditions of this Agreement, of any representations and warranties made by you to {siteData.companyShortName}, of any claims asserted by Third Party Rights claimants or other third parties relating to products offered or displayed on the Site.
          </p>

          <p>
            30) {siteData.companyShortName} shall not be liable for any special, direct, indirect, punitive, incidental, or consequential damages or any damages whatsoever (including but not limited to damages for loss of profits or savings, business interruption, loss of information), whether in contract, negligence, tort or otherwise or any other damages resulting from any of the following:
          </p>

          <ul className="list-inside list-disc pl-4">
            <li>The use or the inability to use the Site;</li>
            <li>Any defect in data, information, content or services purchased or obtained through unauthorised access by third parties to data or private information of any User;</li>
            <li>Statements or conduct of any User of the Site; or</li>
            <li>Any matters relating to Employer Services however arising, including negligence.</li>
          </ul>

          <p>
            31) Notwithstanding any of the foregoing provisions, the aggregate liability of {siteData.companyShortName}, its employees, agents, affiliates, representatives, or anyone acting on its behalf with respect to each User for all claims arising from the use of the Site shall be limited to the greater of:
          </p>

          <ul className="list-inside list-disc pl-4">
            <li>The amount of fees you pay to {siteData.companyShortName} or its affiliates in relation to the use of the Site or any section of the Site in the 12 months prior to the action giving rise to liability; or</li>
            <li>1,000/-. The preceding sentence shall not preclude the requirement by User to prove actual damages. All claims arising from the use of the Site must be filed within one (1) year from the date the cause of action arose.</li>
          </ul>

          <p><strong><u>Intellectual Property Rights</u></strong></p>

          <p>
            32) {siteData.companyShortName} is the sole owner or lawful licensee of all the rights to the Site and the {siteData.siteName} Content. The Site and {siteData.siteName} Content embody trade secrets and intellectual property rights protected under worldwide copyright and other laws. All title, ownership and intellectual property rights in the Site and {siteData.siteName} Content shall remain with {siteData.companyShortName}, its affiliates or licensors of the {siteData.siteName} Content, as the case may be. All rights not otherwise claimed under this Agreement or by {siteData.companyShortName} are hereby reserved.
          </p>

          <p>
            33) “{siteData.siteName}”, “<ConditionalLink to={siteData.siteUrl}>{siteData.siteName} </ConditionalLink>” and the related icons and logos are registered trademarks or trademarks or service marks of {siteData.companyShortName}, in various jurisdictions, and are protected under applicable copyright, trademark and other proprietary rights laws. The unauthorised copying, modification, use or publication of these marks is strictly prohibited.
          </p>

          <p><strong><u>Notices</u></strong></p>

          <p>
            34) All notices or demands to or upon {siteData.companyShortName} shall be effective if in writing and shall be duly made when sent to {siteData.companyShortName} in the following manner to: {siteData.companyFullName}, {siteData.companyAddress}.
          </p>

          <p>
            35) Notices or demands to or upon the User shall be effective if either delivered personally, sent by courier, certified mail, by facsimile or email to the last-known correspondence, fax or email address provided by the User to {siteData.companyShortName}, or by posting such notice or demand on an area of the Site that is publicly accessible without a charge or accessible to the User.
          </p>

          <p>
            Notice to the User shall be deemed to be received by the User if and when:
          </p>

          <ul className="list-inside list-disc pl-4">
            <li>{siteData.companyShortName} is able to demonstrate that communication, whether in physical or electronic form, has been sent to the User.</li>
            <li>Immediately upon {siteData.companyShortName}’s posting such notice on an area of the Site that is publicly accessible without charge or accessible to the User.</li>
          </ul>

          <p id="privacy-policy"><strong><u>Privacy Policy</u></strong></p>

          <p>
            36) For content that is covered by intellectual property rights, you specifically grant {siteData.companyShortName} a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any such content that you post on or in connection with the Site (“IP License”).
          </p>

          <p>
            37) On registration, you provide {siteData.companyShortName} with information such as name, gender, location and other fields mentioned in your registration profile. You grant {siteData.companyShortName} permission to utilise such information for the internal improvement of Site mechanics and any such manner that {siteData.companyShortName} feels is appropriate to enhance your experience on the Site.
          </p>

          <p id="payment-options"><strong>Payment Options</strong></p>

          <p>38) The following modes of payments are available</p>

          <p>a) Domestic credit cards issued by banks and institutions that are part of the Visa &amp; Mastercard Network</p>
          <p>b) Debit cards</p>
          <p>c) Netbanking/Direct Debit payments from select banks in India.</p>
          <p>d) UPI Payments</p>
          <p>e) Wallet Payments</p>

          <p>
            A full list is available at the time of Check Out and prior to making payments for purchases. Our payment gateway partner is{' '}
            <ConditionalLink to="https://business.paytm.com/">
              PayTM
            </ConditionalLink>
          </p>

          <p>
            As prescribed by the financial institutions issuing the credit or debit cards affiliated with Visa and Mastercard you will be required to submit your 16-digit credit card number, card expiry date and 3-digit CVV number (usually on the reverse of the card) when you make your online transaction using your Credit or Debit card. You should also have enrolled your Credit Card with VBV (Verified by Visa) or MSC (Mastercard Secure Code) to complete the transaction.
          </p>

          <p id="refund-policy"><strong><u>Refund Policy</u></strong></p>

          <p>
            39) Online preparation for competitive examination is a completely new experience, if for any reason you have any complaints or dissatisfied in any manner with a course/package subscribed to on <ConditionalLink to={siteData.siteUrl}>{siteData.siteName}</ConditionalLink> , please do contact us.
          </p>

          <p>
            However, if you still are not satisfied and wish to discontinue our services, we shall refund 100% of the fee paid, given that request for refund is received within three days from the date of payment. Please note that payments for offline products, such as books, are not eligible for a refund.
          </p>

          <p id="cancellation-policy"><strong><u>Cancellation Policy</u></strong></p>

          <p>40) We shall refund 100% of the fee paid, if you cancel your purchase within three days from the date of payment. Please note that payments for offline products, such as books, are not eligible for cancellation.</p>

          {/* <p>100% of the Amount Received by Gooded Technologies Pvt Ltd., excluding GST, since that is paid to the government, (as captured above in the invoice) is refundable if the student get MBBS seat in a Government Medical College (this is not marks dependent because for various categories and states, government medical college might get allotted at different scores). We call this Hard Work Reward and it is an acknowledgement of the effort put in by the student in studying from our course without which selection would not have been possible. This amount would be credited to the student's bank account after  the student shares the allotment letter with us.</p> */}

          <p><strong><u>Communication</u></strong></p>

          <p>
            41) When you use the website or send emails or other data, information or communication to {siteData.siteName}, you agree and understand that you are communicating with us through electronic records and you consent to receive communications via electronic records from us periodically and as and when required. We will communicate with you by email or by notices on Website or electronic records on the website or on your mobile number which will be deemed adequate service of notice / electronic record to the maximum extent permitted under any applicable law. We can use your phone number for calling and SMS purpose.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TosPage