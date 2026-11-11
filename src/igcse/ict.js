// Revision notes, quizzes and flashcards for IGCSE ICT, following the Cambridge 0417 topics
// (Edexcel 4IT1 is close). The practical topics cover the skills and checks examiners look for.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "ict",
  name: "ICT",
  topics: [
    one("systems", "Types and components of computer systems", "Computer systems", 6, "Hardware, software, types of computer and emerging technologies.", [
      ["Components", ["Hardware is the physical parts; software is the programs.", "Main memory: RAM (volatile, read and write) and ROM (non volatile, read only).", "The CPU processes instructions. Internal components include the motherboard, graphics and sound cards, and the network interface card.", "Operating systems provide an interface: command line (CLI) or graphical (GUI)."]],
      ["Types of computer", ["Desktop, laptop, tablet, smartphone, smartwatch.", "Emerging: artificial intelligence, extended reality (augmented and virtual reality)."]],
      ["Software and interfaces", ["Application software does user tasks: word processing, spreadsheets, databases, presentations, graphics, video and audio editing, control software.", "System software runs the computer: operating system, compilers, linkers, device drivers, utilities (anti virus, backup, defragmentation, file management).", "User interfaces: command line (CLI, typed commands, needs knowledge but uses little memory), graphical (GUI, icons and windows, easy but uses more memory), dialogue (voice), gesture based (movement).", "Internal memory (RAM, ROM) versus backing storage (keeps data when off). Analogue data must be converted to digital (ADC) for a computer."]],
    ], ["RAM volatile, ROM non volatile.", "CLI needs typed commands; GUI uses icons and menus.", "AR adds to the real world; VR replaces it."], [
      ["Which memory is non volatile?", ["RAM", "ROM", "Cache", "Registers"], "B", "ROM keeps its contents without power."],
      ["What is a GUI?", ["A typed command interface", "A graphical interface using windows, icons and menus", "A type of printer", "A storage device"], "B", "Graphical user interface."],
      ["Which describes augmented reality?", ["A fully computer generated world", "Digital information added to a view of the real world", "A type of printer", "A spreadsheet"], "B", "AR overlays digital content on reality."],
      ["What is software?", ["The physical parts of a computer", "The programs that run on a computer", "The monitor", "The cables"], "B", "Hardware is physical; software is programs."],
      ["Which interface is fastest for an expert but hardest to learn?", ["GUI", "CLI", "Touch", "Voice"], "B", "Command line needs commands to be memorised."],
      ["Which is system software?", ["Spreadsheet", "Device driver", "Word processor", "Video editor"], "B", "It lets the OS talk to hardware."],
      ["Which interface needs typed commands?", ["GUI", "Command line", "Gesture", "Dialogue"], "B", "CLI: typed commands."],
    ]),
    one("io", "Input and output devices", "Input and output devices", 6, "Choosing devices for a purpose.", [
      ["Input", ["Manual: keyboard, mouse, touchscreen, microphone, digital camera.", "Direct data entry: barcode reader, QR scanner, magnetic stripe reader, chip and PIN, RFID, OMR (marks on forms), OCR (printed text), MICR (cheques).", "Sensors measure physical quantities: temperature, light, pressure, moisture."]],
      ["Output", ["Monitors, projectors, printers (inkjet, laser, 3D), speakers.", "Actuators (motors, buzzers, heaters) are controlled by computers.", "Laser printers are fast for large volumes; inkjet suits small runs and photos."]],
      ["Sensors and printers", ["Sensors and uses: temperature (greenhouses, central heating), light (street lights), pressure (burglar alarms), moisture and humidity (greenhouses), pH (rivers, soil), infrared or motion (alarms), proximity (parking), acoustic (sound alarms), gas (CO₂ monitoring).", "Inkjet: cheap to buy, good colour photos, slow, expensive ink. Laser: fast, cheap per page, good for large volumes. 3D printer: builds objects layer by layer (prosthetics, prototypes).", "Touchscreens, scanners, OCR and OMR readers, chip and PIN readers, RFID readers and barcode readers are all ways of entering data."]],
    ], ["OMR for multiple choice forms, OCR for text, MICR for cheques.", "RFID reads tags without contact.", "Actuators are output devices in control systems."], [
      ["Which device reads the magnetic ink on cheques?", ["OCR", "OMR", "MICR", "RFID"], "C", "Magnetic ink character recognition."],
      ["Which device reads marks on a multiple choice answer sheet?", ["OMR", "OCR", "MICR", "Barcode reader"], "A", "Optical mark recognition."],
      ["Which printer is best for large volumes of text quickly?", ["Inkjet", "Laser", "3D", "Dot matrix"], "B", "Laser printers are fast and cheap per page."],
      ["Which uses radio waves to read tags?", ["RFID", "OCR", "Barcode", "Microphone"], "A", "Radio frequency identification."],
      ["Which is an output device?", ["Sensor", "Actuator", "Keyboard", "Scanner"], "B", "Actuators carry out actions."],
      ["Which printer suits printing thousands of letters quickly?", ["Inkjet", "Laser", "3D printer", "Dot matrix"], "B", "Fast and cheap per page."],
      ["Which sensor would control automatic street lights?", ["Temperature", "Light", "pH", "Pressure"], "B", "It detects darkness."],
    ]),
    one("storage", "Storage devices and media", "Storage devices and media", 5, "Magnetic, optical and solid state storage.", [
      ["Types", ["Magnetic: hard disk drives, magnetic tape (cheap, large capacity, used for backups, serial access).", "Optical: CD, DVD, Blu-ray (portable, cheap, lower capacity).", "Solid state: SSD, USB flash drives, memory cards (fast, no moving parts, robust).", "Direct access goes straight to the data; serial access reads from the start."]],
    ], ["Tape: serial access, good for backups.", "SSD: fast, no moving parts.", "Blu-ray holds more than DVD."], [
      ["Which storage uses serial access?", ["SSD", "Magnetic tape", "Hard disk", "Flash drive"], "B", "Tape must be read in order from the start."],
      ["Why are SSDs robust in laptops?", ["They are magnetic", "They have no moving parts", "They are optical", "They use tape"], "B", "No moving parts means less damage from knocks."],
      ["Which optical medium has the highest capacity?", ["CD", "DVD", "Blu-ray", "Floppy disk"], "C", "Blu-ray uses a shorter wavelength laser to store more."],
      ["What is magnetic tape mainly used for today?", ["Phones", "Large backups and archives", "Cameras", "Games consoles"], "B", "It is cheap for very large backups."],
      ["Which type is a memory card?", ["Magnetic", "Optical", "Solid state", "Paper"], "C", "Memory cards use flash memory."],
    ]),
    one("networks", "Networks and the effects of using them", "Networks", 7, "Network devices, types of network, the cloud and security.", [
      ["Devices and types", ["Router connects networks; switch connects devices within a LAN; NIC connects a device to a network.", "LAN (local area), WLAN (wireless LAN), WAN (wide area, such as the internet).", "Wi-Fi has more range and speed; Bluetooth is short range between devices.", "Cloud computing stores data on remote servers: accessible anywhere, but needs internet and raises security concerns."]],
      ["Security", ["Passwords, biometrics, two factor authentication, firewalls and encryption.", "Intranet: a private network for an organisation; extranet allows chosen outsiders in; the internet is public."]],
      ["Wireless and the cloud", ["Wi-Fi: longer range, faster, for internet access. Bluetooth: short range, low power, for connecting nearby devices such as headphones.", "Cloud computing: storing and running files and software on remote servers. Access anywhere and easy sharing, but needs internet, relies on the provider, and raises security and privacy issues.", "Network communication: email, video conferencing (webcam, microphone, speakers, software), audio conferencing (phone or VoIP), web conferencing (online meetings with shared screens). These save travel time and cost but depend on a good connection and time zones.", "Authentication: user IDs and passwords, biometrics, magnetic stripe cards, smart cards, physical tokens, electronic tokens and zero login."]],
    ], ["Router between networks, switch within.", "Intranet private, internet public.", "Cloud: anywhere access, but security and connection risks."], [
      ["Which device connects a LAN to the internet?", ["Switch", "Router", "NIC", "Hub"], "B", "Routers connect different networks."],
      ["What is an intranet?", ["The public internet", "A private network inside an organisation", "A type of cable", "A virus"], "B", "Only members of the organisation can access it."],
      ["Which is short range for connecting devices directly?", ["Wi-Fi", "Bluetooth", "WAN", "Fibre"], "B", "Bluetooth is short range."],
      ["Which is a disadvantage of cloud storage?", ["Access from anywhere", "Needs an internet connection", "Automatic backups", "Easy sharing"], "B", "No connection, no access."],
      ["What is two factor authentication?", ["Two passwords on paper", "Using two different methods to prove identity", "Two firewalls", "Two users sharing"], "B", "For example a password and a code sent to a phone."],
      ["Which suits connecting wireless headphones to a phone?", ["Wi-Fi", "Bluetooth", "Ethernet", "WAN"], "B", "Short range, low power."],
      ["What is a disadvantage of cloud storage?", ["Access from anywhere", "Needs an internet connection", "Easy sharing", "Automatic backup"], "B", "No internet, no access."],
    ]),
    one("effects", "The effects of using IT", "Effects of IT", 5, "Microprocessors at home, and health risks.", [
      ["Effects", ["Smart devices save time and energy but can raise security risks and dependence.", "Health risks: repetitive strain injury (use wrist rests, take breaks), back and neck problems (adjustable chairs), eye strain (anti glare screens, breaks), headaches.", "Physical safety: trailing cables, overloaded sockets, spilled drinks, overheating."]],
    ], ["RSI: wrist rests and breaks.", "Eye strain: anti glare screens.", "Physical safety risks are about electricity and trips."], [
      ["How can repetitive strain injury be reduced?", ["Using a wrist rest and taking breaks", "Brighter screens", "Faster typing", "Longer cables"], "A", "Support and breaks reduce strain."],
      ["Which is a physical safety risk?", ["Eye strain", "Trailing cables", "RSI", "Back pain"], "B", "Trailing cables can cause trips."],
      ["How can eye strain be reduced?", ["Anti glare screens and regular breaks", "Wrist rests", "Ergonomic keyboards", "Footrests"], "A", "Reducing glare and resting eyes help."],
      ["Which is a disadvantage of smart home devices?", ["Saves time", "Possible security risks if hacked", "Saves energy", "Remote control"], "B", "Connected devices can be targets."],
      ["What helps prevent back problems?", ["Adjustable chairs", "Brighter screens", "Faster processors", "Cloud storage"], "A", "Good posture support helps."],
    ]),
    one("applications", "ICT applications", "ICT applications", 7, "Communication, modelling, control, school, banking, medicine, retail and recognition systems.", [
      ["Examples", ["Computer modelling: simulations of traffic, weather or finances, safer and cheaper than real tests.", "Control systems: sensors feed a microprocessor which compares against preset values and controls actuators.", "Banking: ATMs, electronic funds transfer, online banking.", "Medicine: patient records, expert systems for diagnosis, 3D printing of prosthetics.", "Retail: point of sale terminals, stock control, contactless payment.", "Satellite systems: GPS, GIS and media communication."]],
      ["More applications", ["Banking: ATMs, electronic funds transfer (EFT), internet banking, chip and PIN and contactless payments, cheque clearing.", "Medicine: electronic patient records, pharmacy records, 3D printing of prosthetics and implants, expert systems for diagnosis.", "Retail: point of sale (POS) terminals with barcodes, automatic stock control, EFTPOS, internet shopping.", "Recognition systems: OCR, OMR (multiple choice sheets), RFID (tags in stock, passports), automatic number plate recognition (ANPR), biometrics (fingerprints, faces).", "Satellite systems: GPS (sat nav), GIS (layered maps), media communication (TV, phones).", "Booking systems (travel, cinemas, events) prevent double booking and send e-tickets."]],
    ], ["Models are safer and cheaper than real experiments.", "Control: sensor, microprocessor, actuator.", "Expert systems support diagnosis."], [
      ["Why use a computer model of a bridge?", ["It is less accurate", "It is safer and cheaper than testing a real bridge", "It takes longer", "It needs no data"], "B", "Models test many scenarios safely."],
      ["What does GPS do?", ["Stores medical records", "Works out location using satellite signals", "Prints maps", "Sends emails"], "B", "Global positioning system."],
      ["In a control system, what compares readings with preset values?", ["The sensor", "The microprocessor", "The actuator", "The monitor"], "B", "The microprocessor decides the action."],
      ["What does EFT stand for?", ["Electronic funds transfer", "Easy file transfer", "External file type", "Electric fund tax"], "A", "Money moved electronically between accounts."],
      ["Which system helps doctors diagnose illnesses?", ["Expert system", "Spreadsheet", "DTP", "Web browser"], "A", "Expert systems use rules and knowledge to suggest diagnoses."],
      ["What does ANPR recognise?", ["Faces", "Car number plates", "Barcodes", "Fingerprints"], "B", "Automatic number plate recognition."],
      ["What does GIS do?", ["Finds your position only", "Layers data on maps for analysis", "Sends emails", "Prints maps"], "B", "Geographic information systems layer data."],
    ]),
    one("lifecycle", "The systems life cycle", "The systems life cycle", 7, "Analysis, design, development and testing, implementation, documentation and evaluation.", [
      ["Stages", ["Analysis: research the current system by observation, interviews, questionnaires and examining documents.", "Design: data structures, input forms, output formats, validation rules.", "Development and testing: normal, abnormal and extreme test data.", "Implementation: direct changeover, parallel running, pilot running or phased.", "Documentation: technical (for programmers) and user (for users).", "Evaluation: compare the system with the requirements and gather feedback."]],
      ["Testing, implementation and evaluation", ["Test with normal, abnormal and extreme data, and with live data. A test plan lists the test, data, expected and actual results.", "Direct changeover: old system stops, new starts at once (fast and cheap, but risky).", "Parallel running: both run together (safe, but costly and double the work).", "Pilot running: try it in one branch first. Phased: introduce one part at a time.", "Documentation: technical (for maintaining the system: program listings, data structures) and user (how to use it: instructions, troubleshooting).", "Evaluation: compare the new system with the requirements, get user feedback, and suggest improvements."]],
    ], ["Four research methods in analysis.", "Four implementation methods.", "Technical versus user documentation."], [
      ["Which implementation runs old and new systems together?", ["Direct", "Parallel", "Pilot", "Phased"], "B", "Parallel running keeps both until the new one is trusted."],
      ["Which research method suits a large number of people?", ["Interviews", "Questionnaires", "Observation", "Examining documents"], "B", "Questionnaires reach many people quickly."],
      ["Which implementation is fastest but most risky?", ["Direct changeover", "Parallel", "Pilot", "Phased"], "A", "The old system stops immediately."],
      ["Who is technical documentation for?", ["Users", "Programmers and analysts", "Customers", "Managers only"], "B", "It explains how the system works for future maintenance."],
      ["What happens in evaluation?", ["Writing code", "Comparing the system against the requirements", "Interviewing users before design", "Choosing hardware"], "B", "Evaluation checks if the solution meets its aims."],
      ["Which implementation method is safest if the new system fails?", ["Direct", "Parallel running", "Phased", "None"], "B", "The old system still runs."],
      ["What type of documentation helps someone maintain the system?", ["User", "Technical", "Marketing", "None"], "B", "It explains how the system works."],
    ]),
    one("safety", "Safety and security", "Safety and security", 7, "Data protection, e-safety and security of data.", [
      ["Data protection and e-safety", ["Data protection laws: data must be processed fairly, kept secure, accurate and not kept longer than needed.", "Personal data includes name, address, date of birth and medical details; sensitive data needs extra care.", "E-safety: do not share personal details, use privacy settings, only meet online contacts with care, report concerns."]],
      ["Threats", ["Hacking, phishing, smishing (by text), vishing (by voice), pharming, viruses, spam, moderated and unmoderated forums.", "Protection: anti virus, firewalls, strong passwords, biometrics, encryption, SSL, two factor authentication."]],
      ["Physical safety and fraud", ["Physical hazards: electrocution (cover wires, no drinks near computers), fire (do not overload sockets, ventilation), tripping over cables (use cable ducts), heavy equipment falling (strong desks).", "Card fraud: shoulder surfing, card skimming, cloning. Protect PINs and check card readers.", "Digital certificates confirm a website's identity; HTTPS and the padlock show an encrypted connection."]],
    ], ["Phishing email, smishing text, vishing voice.", "Pharming redirects to a fake site.", "Protect personal data by law and good habits."], [
      ["What is smishing?", ["Phishing by text message", "Phishing by voice call", "Redirecting a website", "A type of virus"], "A", "SMS phishing."],
      ["What is pharming?", ["Fake emails", "Malicious code that redirects users to a fake website", "Spam", "A firewall"], "B", "Pharming changes where a URL takes you."],
      ["What does SSL do?", ["Encrypts data between a browser and a website", "Stops spam", "Removes viruses", "Speeds up downloads"], "A", "Secure sockets layer encrypts communication."],
      ["Which is an e-safety rule?", ["Share your address online", "Use privacy settings on social media", "Accept every friend request", "Use the same password everywhere"], "B", "Privacy settings limit who sees your information."],
      ["What is a biometric method?", ["A password", "Fingerprint recognition", "A PIN", "A security question"], "B", "Biometrics use body features."],
      ["How can you reduce the risk of tripping over cables?", ["More sockets", "Use cable ducts or covers", "Drinks near computers", "Bigger screens"], "B", "Keep cables hidden."],
      ["What is shoulder surfing?", ["Watching someone enter their PIN", "Hacking Wi-Fi", "A virus", "Phishing email"], "A", "Looking over someone's shoulder."],
    ]),
    one("audience", "Audience and communication", "Audience, copyright and the internet", 5, "Designing for an audience, copyright, and evaluating information online.", [
      ["Audience", ["Consider age, experience, needs and expectations of the audience.", "Language, font size, colours and images must suit them.", "Copyright protects work; software piracy is illegal. Licences, product keys and encryption protect software."]],
      ["Using the internet", ["Evaluate sources: who wrote it, when, is it biased, can it be checked elsewhere.", "Email etiquette (netiquette): no shouting in capitals, clear subject lines, careful with attachments.", "Spam and suspicious attachments may carry malware."]],
    ], ["Design for the audience.", "Copyright protects creative work and software.", "Check reliability of web sources."], [
      ["Why does audience matter in a presentation for young children?", ["It does not", "Language, fonts and images must suit their age", "Children like small text", "Only colour matters"], "B", "Design must suit the reader."],
      ["What is software piracy?", ["Writing software", "Illegally copying or using software", "Buying software", "Updating software"], "B", "It breaks copyright law."],
      ["Which is good netiquette?", ["WRITING IN CAPITALS", "Using a clear subject line", "Sending large unexplained attachments", "Forwarding chain emails"], "B", "Clear subjects help recipients."],
      ["How can you check if a website is reliable?", ["Check the author, date and compare with other sources", "Trust the first result", "Count the images", "Check the font"], "B", "Cross checking helps judge reliability."],
      ["What protects a creator's original work?", ["Copyright", "Firewall", "Encryption only", "Spam filter"], "A", "Copyright law."],
    ]),
    one("files", "File management", "File management", 5, "File types, naming, folders and reducing file size.", [
      ["Files", ["Generic file types work in many programs: .csv, .txt, .rtf, .pdf, .jpg, .png, .gif, .mp3, .mp4, .zip.", "Save files with sensible names in a clear folder structure.", "Reduce file size by compressing (.zip) or reducing image resolution, which helps when emailing or uploading.", "Save as a .pdf for documents that must look the same everywhere."]],
    ], [".csv for data between programs.", "Compress to reduce size.", "Clear names and folders."], [
      ["Which file type keeps a document's layout the same on any device?", [".txt", ".pdf", ".csv", ".rtf"], "B", "PDF preserves layout."],
      ["Which file type stores data as comma separated values?", [".csv", ".jpg", ".mp3", ".gif"], "A", "Comma separated values."],
      ["Why compress a file before emailing?", ["To make it bigger", "To reduce file size for faster sending", "To add colour", "To make it secure"], "B", "Smaller files upload and send faster."],
      ["Which file type is an animated image?", [".gif", ".csv", ".pdf", ".txt"], "A", "GIFs can contain simple animations."],
      ["What is good practice for naming files?", ["file1, file2", "Meaningful names in organised folders", "Random letters", "No names"], "B", "Meaningful names help you find files."],
    ]),
    one("images", "Images and layout", "Images and layout", 5, "Editing images and arranging page layout.", [
      ["Images", ["Crop to remove unwanted parts; resize while keeping the aspect ratio so the image is not distorted.", "Rotate, reflect, adjust brightness and contrast.", "Reduce resolution to lower the file size."]],
      ["Layout", ["Use headers and footers for repeated information like page numbers.", "Text wrapping: square, tight, above and below.", "Columns, margins, page orientation (portrait or landscape) and consistent alignment."]],
    ], ["Keep the aspect ratio.", "Headers and footers repeat on every page.", "Choose text wrapping deliberately."], [
      ["What does maintaining the aspect ratio do?", ["Changes colours", "Stops the image being stretched or distorted", "Crops the image", "Rotates it"], "B", "Width and height change in proportion."],
      ["What does cropping do?", ["Removes unwanted parts of an image", "Makes it bigger", "Changes the format", "Adds a border"], "A", "Cropping trims edges."],
      ["Where should page numbers usually go?", ["In the header or footer", "In the middle of the page", "In a table", "In the title"], "A", "Headers and footers repeat on each page."],
      ["Which orientation is wider than it is tall?", ["Portrait", "Landscape", "Square", "Vertical"], "B", "Landscape."],
      ["Why reduce the resolution of an image?", ["To reduce file size", "To improve quality", "To add colour", "To rotate it"], "A", "Fewer pixels means a smaller file."],
    ]),
    one("styles", "Styles and proofing", "Styles and proofing", 5, "Consistent styles, spell and grammar checks, and verification.", [
      ["Styles", ["A corporate house style keeps documents consistent: fonts, colours, logos.", "Styles (Heading 1, body text) apply formatting consistently and quickly.", "Serif fonts (Times) and sans serif fonts (Arial)."]],
      ["Proofing", ["Spell and grammar checkers do not catch everything, such as correctly spelled wrong words or names.", "Validation checks data is reasonable; verification checks it was copied correctly (visual check, double entry).", "Proofread carefully before submitting."]],
    ], ["House style for consistency.", "Spell check misses some errors.", "Validation versus verification."], [
      ["Why use a corporate house style?", ["For consistency and brand identity", "To make files smaller", "To add viruses", "It is a law"], "A", "All documents look like they belong together."],
      ["Which error might a spell checker miss?", ["Teh", "Using 'their' instead of 'there'", "Recieve", "Definately"], "B", "Both are real words, so it may not flag it."],
      ["What is double entry?", ["Typing data twice and comparing", "Saving twice", "Two passwords", "Entering two records"], "A", "A verification method."],
      ["Which font is sans serif?", ["Times New Roman", "Arial", "Georgia", "Garamond"], "B", "Arial has no serifs."],
      ["What does validation check?", ["Data is reasonable", "Data was copied exactly", "Spelling", "File size"], "A", "For example a range or type check."],
    ]),
    one("graphs", "Graphs and charts", "Graphs and charts", 5, "Choosing and labelling charts.", [
      ["Choosing", ["Pie charts show proportions of a whole.", "Bar or column charts compare categories.", "Line graphs show change over time.", "Scatter graphs show the relationship between two variables."]],
      ["Labelling", ["Add a title, axis titles, a legend if needed, and data labels or percentages where asked.", "Set axis scales (minimum, maximum) sensibly.", "Choose the right data range, including labels."]],
    ], ["Pie for parts of a whole.", "Line for change over time.", "Titles and axis labels always."], [
      ["Which chart shows parts of a whole?", ["Line graph", "Pie chart", "Scatter graph", "Bar chart"], "B", "Pie charts show proportions."],
      ["Which chart shows temperature over a week?", ["Pie chart", "Line graph", "Scatter graph", "Table"], "B", "Line graphs show change over time."],
      ["What should every chart have?", ["A title and labelled axes (if it has axes)", "3D effects", "No labels", "Bright colours only"], "A", "Labels make charts readable."],
      ["When do you need a legend?", ["When there are several data series or segments to identify", "Never", "Always, even with one series", "Only on line graphs"], "A", "The legend identifies each series."],
      ["Which chart shows the relationship between height and weight?", ["Pie chart", "Scatter graph", "Bar chart", "Line graph"], "B", "Scatter graphs show correlation."],
    ]),
    one("documents", "Document production", "Document production", 5, "Formatting text, tables, lists and mail merge.", [
      ["Formatting", ["Font face, size, emphasis (bold, italic, underline), alignment (left, centre, right, fully justified).", "Bulleted and numbered lists, line spacing and paragraph spacing.", "Tables: insert, merge cells, shading, borders, wrapping text."]],
      ["Mail merge", ["Combine a master document with a data source to make personalised letters.", "Insert merge fields, select records and preview before merging.", "Page and section breaks, widows and orphans control."]],
    ], ["Fully justified: both edges straight.", "Mail merge: master document plus data source.", "Avoid widows and orphans."], [
      ["Which alignment makes both left and right edges straight?", ["Left", "Centre", "Right", "Fully justified"], "D", "Justified text aligns to both margins."],
      ["What is mail merge used for?", ["Sending viruses", "Creating personalised letters from a data source", "Merging two images", "Combining spreadsheets"], "B", "Each letter gets data from one record."],
      ["What is a widow?", ["The last line of a paragraph alone at the top of a page", "A blank page", "A header", "A table border"], "A", "Widows and orphans make layouts look untidy."],
      ["Which inserts a new page at a chosen point?", ["Line break", "Page break", "Tab", "Indent"], "B", "A page break starts a new page."],
      ["Which list shows steps in order?", ["Bulleted", "Numbered", "Unordered", "None"], "B", "Numbered lists show sequence."],
    ]),
    one("db", "Databases", "Databases", 6, "Fields, records, data types, keys, queries and reports.", [
      ["Structure", ["Flat file databases have one table; relational databases link tables with keys.", "Primary key: unique for each record. Foreign key: links to a primary key in another table.", "Field types: text, numeric (integer, decimal, currency), date and time, Boolean."]],
      ["Using a database", ["Queries search with criteria: AND, OR, NOT, LIKE with wildcards, greater than, less than.", "Sort ascending or descending.", "Calculated fields, and summaries such as sum, average, count.", "Reports present results neatly; forms make data entry easier."]],
      ["Validation and verification", ["Validation: range check, type check, length check, character check, format check, presence check, check digit.", "Verification: visual check (proof reading) and double entry (typed twice and compared).", "Data types: text or alphanumeric, numeric (integer, decimal, currency), date or time, Boolean (yes or no).", "Forms help users enter data; reports present data neatly with titles and groupings."]],
    ], ["Primary key unique; foreign key links.", "Queries use criteria and operators.", "Forms for input, reports for output."], [
      ["What does a foreign key do?", ["Uniquely identifies a record", "Links to a primary key in another table", "Sorts data", "Encrypts data"], "B", "It creates the relationship."],
      ["Which field type suits a yes or no answer?", ["Text", "Boolean", "Date", "Currency"], "B", "Boolean stores true or false."],
      ["What does a query do?", ["Deletes the database", "Searches for records that meet criteria", "Prints the screen", "Adds a password"], "B", "It finds matching records."],
      ["What is a relational database?", ["A single table", "Linked tables using keys", "A spreadsheet", "A text file"], "B", "Tables are related through keys."],
      ["What makes data entry easier?", ["A form", "A report", "A query", "A primary key"], "A", "Forms provide a user friendly input screen."],
      ["Which check makes sure a field is not left empty?", ["Range check", "Presence check", "Format check", "Length check"], "B", "Presence check."],
      ["What is double entry verification?", ["Checking a range", "Typing data twice and comparing", "Using a check digit", "Proof reading"], "B", "Two entries must match."],
    ]),
    one("presentations", "Presentations", "Presentations", 4, "Master slides, transitions and animations.", [
      ["Building", ["Use a master slide for consistent backgrounds, fonts and logos.", "Insert text, images, charts, video and sound.", "Transitions move between slides; animations move objects on a slide. Use them sparingly.", "Speaker notes help the presenter; handouts help the audience."]],
    ], ["Master slide for consistency.", "Transitions between slides, animations within.", "Do not overuse effects."], [
      ["What does a master slide do?", ["Adds sound", "Applies consistent design to all slides", "Deletes slides", "Prints handouts"], "B", "Changes to the master affect every slide."],
      ["What is a transition?", ["An effect between slides", "An effect on an object", "A type of chart", "A font"], "A", "Transitions happen when moving to the next slide."],
      ["Why use speaker notes?", ["To help the presenter remember points", "To show the audience", "To add animation", "To change the background"], "A", "Notes are visible to the presenter only."],
      ["What is an animation in a presentation?", ["Moving an object on a slide", "Moving between slides", "A video file", "A slide master"], "A", "Animations apply to objects."],
      ["What is the risk of too many effects?", ["They distract the audience", "They make it more professional", "They speed it up", "None"], "A", "Effects should support, not distract."],
    ]),
    one("spreadsheets", "Spreadsheets", "Spreadsheets", 7, "Formulae, functions, referencing, sorting and modelling.", [
      ["Formulae", ["Formulae start with =. Cell references can be relative (A1), absolute ($A$1) or mixed ($A1).", "Absolute references stay fixed when a formula is copied.", "Functions: SUM, AVERAGE, MAX, MIN, COUNT, COUNTIF, IF, ROUND, VLOOKUP, XLOOKUP.", "Named cells and ranges make formulae clearer."]],
      ["Using", ["Sort and filter data; use conditional formatting to highlight values.", "Modelling: change values to see what if.", "Format cells as currency, percentage, decimal places."]],
      ["Functions to know", ["SUM, AVERAGE, MAX, MIN, COUNT (numbers), COUNTA (non empty), COUNTIF (meets a condition), ROUND, INT.", "IF: =IF(B2>=50,\"Pass\",\"Fail\"). Nested IF for more than two outcomes.", "LOOKUP, VLOOKUP, HLOOKUP and XLOOKUP find a value in a table: =VLOOKUP(A2,$F$2:$G$10,2,FALSE).", "Named cells and ranges make formulas easier to read.", "Validation in spreadsheets: range, type, length, list (drop down)."]],
    ], ["$ makes a reference absolute.", "IF(condition, true, false).", "Use what if modelling to test changes."], [
      ["What does $A$1 mean?", ["A relative reference", "An absolute reference that does not change when copied", "A currency value", "A range"], "B", "Both column and row are fixed."],
      ["What does =IF(B2>50,\"Pass\",\"Fail\") do?", ["Adds B2 and 50", "Shows Pass if B2 is greater than 50, otherwise Fail", "Counts passes", "Always shows Pass"], "B", "IF returns one value if true, another if false."],
      ["Which function counts cells that meet a condition?", ["COUNT", "COUNTIF", "SUM", "MAX"], "B", "COUNTIF counts matches."],
      ["What is conditional formatting?", ["Formatting that changes depending on the cell value", "A type of chart", "Sorting data", "Protecting cells"], "A", "For example turning negative numbers red."],
      ["Which function looks up a value in a table?", ["VLOOKUP", "SUM", "ROUND", "AVERAGE"], "A", "VLOOKUP searches the first column of a table."],
      ["What does COUNTIF do?", ["Adds values", "Counts cells meeting a condition", "Finds the largest", "Rounds"], "B", "Count if the condition is true."],
      ["Why use $F$2:$G$10 in a VLOOKUP?", ["It is shorter", "So the table range stays fixed when copied", "To make it bold", "It is required"], "B", "Absolute references."],
    ]),
    one("web", "Website authoring", "Website authoring", 7, "The content, presentation and behaviour layers: HTML and CSS.", [
      ["Layers", ["Content layer: HTML structure (head, body, headings, paragraphs, tables, lists, images, links).", "Presentation layer: CSS styles colours, fonts, spacing and layout.", "Behaviour layer: scripts that make pages interactive."]],
      ["HTML and CSS", ["Relative file paths keep links working when a site is moved.", "Links can open in a new window with target=\"_blank\".", "External stylesheets (.css) apply one style to many pages; inline styles override them.", "CSS selectors: element, class (.name) and id (#name). Colours as hex codes like #FF0000."]],
      ["HTML and CSS detail", ["Head: title, meta tags (charset, keywords, author, description, viewport), and links to stylesheets. Body: the visible content.", "Tags: <h1> to <h6>, <p>, <img src alt width height>, <a href> (link), <table> with <tr> and <td>, <ul> and <ol> with <li>.", "Links: to other pages, to a bookmark on the same page (#id), to send an email (mailto:), and opening in a new tab (target=\"_blank\").", "CSS: classes (.name) can be used many times; an id (#name) once. Properties include background colour, font family, size, colour, alignment and spacing.", "Precedence: inline styles override internal (in the head), which override external stylesheets."]],
    ], ["HTML content, CSS presentation, scripts behaviour.", "Relative paths, not absolute.", "External stylesheet for consistency across pages."], [
      ["Which layer uses CSS?", ["Content", "Presentation", "Behaviour", "Database"], "B", "CSS controls how content looks."],
      ["Why use relative file paths?", ["They are longer", "Links keep working when the site is moved", "They are faster to type", "They are required for images only"], "B", "Absolute paths break when files move."],
      ["Which CSS selector targets a class called box?", ["#box", ".box", "box", "*box"], "B", "Classes use a dot."],
      ["Which attribute opens a link in a new window or tab?", ["href", "target=\"_blank\"", "src", "alt"], "B", "target=\"_blank\" opens a new tab."],
      ["What colour is #FF0000?", ["Green", "Blue", "Red", "Black"], "C", "Full red, no green or blue."],
      ["Which HTML tag makes a hyperlink?", ["<img>", "<a>", "<p>", "<li>"], "B", "Anchor tag with href."],
      ["Which CSS has the highest precedence?", ["External", "Internal", "Inline", "They are equal"], "C", "Inline overrides the others."],
    ]),
  ],
};
