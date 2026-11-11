// Revision notes, quizzes and flashcards for IGCSE Computer Science, following the Cambridge 0478
// topics (Edexcel 4CP0 covers the same ground). Written for Testiddle.

const N = (skill, minutes, intro, sections, points, questions) => ({ skill, minutes, intro, sections, points, questions });
const one = (id, name, ...rest) => ({ id, name, subs: [N(...rest)] });

export default {
  id: "cs",
  name: "Computer Science",
  topics: [
    one("data-rep", "Data representation", "Number systems, text, sound and images", 9, "Binary, hexadecimal, file sizes and compression.", [
      ["Number systems", ["Binary is base 2, denary base 10, hexadecimal base 16 (0 to 9 then A to F).", "8 bits = 1 byte. One hex digit = 4 bits (a nibble).", "Binary addition can cause overflow when the result needs more bits than are available.", "Logical shifts move bits left (multiply by 2) or right (divide by 2). Two's complement represents negative numbers."]],
      ["Text, sound and images", ["Character sets: ASCII (7 or 8 bits) and Unicode (more bits, covers all languages).", "Sound: sample rate and sample resolution (bit depth) affect quality and file size.", "Images: resolution and colour depth affect quality and file size.", "File size of an image = width x height x colour depth (bits)."]],
      ["Units and compression", ["KiB = 1024 bytes, MiB = 1024 KiB, GiB = 1024 MiB.", "Lossy compression removes data permanently (JPEG, MP3).", "Lossless compression keeps all data (run length encoding, ZIP)."]],
    ], ["Hex digit = 4 bits.", "Higher sample rate or colour depth means bigger files.", "Lossy loses data; lossless does not."], [
      ["What is 1010 in denary?", ["8", "10", "12", "5"], "B", "8 + 2 = 10."],
      ["What is the hexadecimal for denary 255?", ["EE", "FF", "F0", "1FF"], "B", "255 = 15 x 16 + 15 = FF."],
      ["What does a logical left shift of one place do to an unsigned binary number?", ["Halves it", "Doubles it", "Adds one", "Makes it negative"], "B", "Each left shift multiplies by 2 (if no bits are lost)."],
      ["Which compression permanently removes data?", ["Lossless", "Lossy", "Run length encoding", "ZIP"], "B", "Lossy compression discards data."],
      ["Why does Unicode use more bits than ASCII?", ["To be faster", "To represent characters from all languages", "To compress text", "To encrypt text"], "B", "More bits allow many more characters."],
    ]),
    one("transmission", "Data transmission", "Sending data", 7, "Packets, transmission methods, error checking and encryption.", [
      ["Packets", ["Data is split into packets with a header (destination, source, packet number), payload and trailer.", "Packet switching: packets may take different routes and are reassembled in order."]],
      ["Methods", ["Serial: one bit at a time on one wire, reliable over long distances.", "Parallel: several bits at once on several wires, fast over short distances but bits can skew.", "Simplex (one way), half duplex (both ways, not at once), full duplex (both ways at once).", "USB is a common serial standard."]],
      ["Errors and security", ["Parity check, checksum, echo check and check digits detect errors.", "ARQ (automatic repeat request) uses acknowledgements and timeouts.", "Symmetric encryption uses one key; asymmetric uses a public key and a private key."]],
    ], ["Header: destination, source, packet number.", "Serial for long distance; parallel for short.", "Asymmetric: public key to encrypt, private key to decrypt."], [
      ["Which transmission can send in both directions at the same time?", ["Simplex", "Half duplex", "Full duplex", "Serial"], "C", "Full duplex is both ways simultaneously."],
      ["What is in a packet header?", ["Only the data", "Destination address, source address and packet number", "The checksum only", "Encryption key"], "B", "The header lets packets be routed and reassembled."],
      ["Why is serial better over long distances?", ["Faster", "No skewing of bits", "Uses more wires", "Cheaper keyboards"], "B", "Bits arrive in order on one wire, avoiding skew."],
      ["What does a parity check detect?", ["Viruses", "Errors in transmitted data", "Missing packets only", "Encryption"], "B", "It checks the number of 1s is odd or even as agreed."],
      ["In asymmetric encryption, which key decrypts the message?", ["The public key", "The private key", "Any key", "No key"], "B", "Only the receiver's private key decrypts it."],
    ]),
    one("hardware", "Hardware", "The CPU and computer hardware", 9, "The CPU, the fetch decode execute cycle, memory, storage and devices.", [
      ["The CPU", ["Von Neumann architecture: instructions and data stored together in memory.", "Components: ALU, control unit, registers (PC, MAR, MDR, CIR, ACC) and buses (address, data, control).", "Fetch decode execute: the PC holds the next address, copied to the MAR; data comes into the MDR; the instruction goes to the CIR and is decoded and executed.", "Performance depends on clock speed, number of cores and cache size."]],
      ["Memory and storage", ["RAM is volatile and holds data in use; ROM is non volatile and holds the start up instructions.", "Secondary storage: magnetic (HDD), optical (CD, DVD), solid state (SSD, flash).", "Virtual memory uses secondary storage as extra RAM, but it is slower."]],
      ["Devices", ["Input: keyboard, mouse, microphone, scanner, sensors.", "Output: monitor, printer, speaker, actuators.", "Embedded systems are computers built into a larger device, such as a washing machine."]],
    ], ["PC, MAR, MDR, CIR, ACC.", "RAM volatile, ROM non volatile.", "More cores, faster clock, bigger cache can mean better performance."], [
      ["Which register holds the address of the next instruction?", ["MAR", "MDR", "PC", "ACC"], "C", "The program counter holds the next instruction's address."],
      ["What does the ALU do?", ["Stores data permanently", "Performs arithmetic and logic operations", "Controls the printer", "Holds the operating system"], "B", "Arithmetic Logic Unit."],
      ["Which memory is volatile?", ["ROM", "RAM", "SSD", "HDD"], "B", "RAM loses its contents when power is off."],
      ["What is an embedded system?", ["A cloud server", "A computer built into a larger device for a specific task", "A laptop", "A virus"], "B", "Like the controller in a washing machine."],
      ["Which storage has no moving parts?", ["HDD", "DVD", "SSD", "Magnetic tape"], "C", "Solid state drives use flash memory."],
    ]),
    one("software", "Software", "System software and languages", 7, "Operating systems, interrupts, translators and IDEs.", [
      ["System and application software", ["System software runs the computer: the operating system and utilities.", "The operating system manages memory, files, peripherals, users, multitasking and security, and provides an interface.", "Interrupts are signals that make the CPU pause and deal with an event, using an interrupt service routine."]],
      ["Languages and translators", ["High level languages are easy for humans; low level (assembly, machine code) is close to hardware.", "A compiler translates the whole program at once into an executable; errors are reported at the end.", "An interpreter translates and runs one line at a time, stopping at the first error.", "An assembler translates assembly language into machine code.", "IDEs provide an editor, error diagnostics, run time environment and translator."]],
    ], ["Compiler: all at once, executable. Interpreter: line by line.", "Interrupts make the CPU respond to events.", "OS manages memory, files, devices and users."], [
      ["Which translator produces an executable file?", ["Interpreter", "Compiler", "Assembler only for high level", "IDE"], "B", "A compiler translates the whole program into an executable."],
      ["What is an interrupt?", ["A virus", "A signal that makes the CPU pause and handle an event", "A type of RAM", "A compiler error"], "B", "Interrupts let devices or software get the CPU's attention."],
      ["Which is system software?", ["A word processor", "An operating system", "A game", "A web browser"], "B", "The OS runs the computer."],
      ["Why might a programmer use an interpreter while developing?", ["It makes a smaller executable", "It stops at the first error, which helps debugging", "It is always faster", "It hides the code"], "B", "Errors are found line by line."],
      ["What does an assembler do?", ["Translates high level code", "Translates assembly language into machine code", "Runs programs", "Compresses files"], "B", "Assembly to machine code."],
    ]),
    one("internet", "The internet and its uses", "The internet, the web and cyber security", 8, "How the web works, and threats and protection online.", [
      ["The web", ["The internet is the network of networks; the World Wide Web is the collection of web pages on it.", "A URL has a protocol, domain name and file name. DNS turns domain names into IP addresses.", "HTTP and HTTPS (secure, encrypted with SSL or TLS). Browsers render HTML, store cookies and history.", "Cookies: session (deleted when the browser closes) and persistent (stored)."]],
      ["Digital currency and threats", ["Blockchain records transactions in linked blocks that are hard to change.", "Threats: brute force, data interception, DDoS, hacking, malware (virus, worm, trojan, spyware, adware, ransomware), phishing, pharming, social engineering.", "Protection: firewalls, proxy servers, anti malware, strong passwords, two step verification, biometrics, SSL, access levels, privacy settings."]],
    ], ["DNS: domain name to IP address.", "HTTPS uses SSL or TLS encryption.", "Phishing is fake emails; pharming redirects to a fake site."], [
      ["What does DNS do?", ["Encrypts data", "Translates domain names into IP addresses", "Blocks viruses", "Stores cookies"], "B", "DNS looks up the IP address for a domain name."],
      ["What is phishing?", ["A fake email trying to get personal details", "Redirecting a URL to a fake website", "Flooding a server with traffic", "A type of firewall"], "A", "Phishing uses fake messages to trick users."],
      ["What is a DDoS attack?", ["Stealing passwords", "Flooding a server with requests so it cannot respond", "Encrypting files for ransom", "Copying a website"], "B", "Distributed denial of service."],
      ["What does the S in HTTPS mean?", ["Speed", "Secure", "Server", "Standard"], "B", "It uses encryption (SSL or TLS)."],
      ["Which type of malware encrypts files and demands payment?", ["Adware", "Ransomware", "Spyware", "Worm"], "B", "Ransomware holds data to ransom."],
    ]),
    one("emerging", "Automated and emerging technologies", "Automation, robotics and AI", 6, "Sensors, actuators, robots and artificial intelligence.", [
      ["Automated systems", ["Sensors collect data; a microprocessor processes it against set values; actuators carry out actions.", "Used in industry, transport, agriculture, weather, gaming, lighting and science.", "Advantages: speed, accuracy, safety, working all the time. Disadvantages: cost, maintenance, job losses."]],
      ["Robotics and AI", ["Robots have a mechanical structure, sensors, actuators and are programmable.", "Artificial intelligence simulates intelligent behaviour: it can collect data, apply rules, reason and learn.", "Expert systems have a knowledge base, rule base, inference engine and interface.", "Machine learning improves by training on data."]],
    ], ["Sensor, microprocessor, actuator.", "Expert system parts: knowledge base, rules, inference engine, interface.", "Machine learning learns from data."], [
      ["What does an actuator do?", ["Measures temperature", "Carries out a physical action", "Stores data", "Displays text"], "B", "Actuators such as motors and valves make things happen."],
      ["Which is part of an expert system?", ["Inference engine", "Graphics card", "Printer", "Router"], "A", "The inference engine applies rules to the knowledge base."],
      ["What is machine learning?", ["A robot that cleans", "A system that improves its performance by training on data", "A type of RAM", "A programming language"], "B", "It learns patterns from data."],
      ["Which is a disadvantage of automated systems?", ["They never get tired", "High set up and maintenance costs", "They are accurate", "They are fast"], "B", "They are expensive to install and maintain."],
      ["What does a sensor do?", ["Collects data from the environment", "Moves a robot arm", "Displays output", "Makes decisions"], "A", "Sensors measure physical quantities."],
    ]),
    one("algorithms", "Algorithm design and problem solving", "Algorithms", 9, "Decomposition, flowcharts, pseudocode, standard algorithms, validation and testing.", [
      ["Design", ["Program development life cycle: analysis, design, coding, testing.", "Decomposition breaks a problem into smaller parts; abstraction removes unnecessary detail.", "Represent algorithms with structure diagrams, flowcharts and pseudocode."]],
      ["Standard methods", ["Linear search checks each item in turn.", "Bubble sort repeatedly swaps adjacent items that are out of order.", "Totalling, counting, finding maximum, minimum and average."]],
      ["Validation and testing", ["Validation checks data is reasonable: range, length, type, presence, format, check digit.", "Verification checks data was entered correctly: double entry, visual check.", "Test data: normal, abnormal (erroneous), extreme and boundary.", "Trace tables follow variables step by step to find errors."]],
    ], ["Validation: reasonable. Verification: copied correctly.", "Test with normal, abnormal, extreme and boundary data.", "Bubble sort swaps neighbours."], [
      ["What is abstraction?", ["Adding detail", "Removing unnecessary detail to focus on what matters", "Breaking a problem into parts", "Testing a program"], "B", "Decomposition is breaking into parts."],
      ["A program accepts ages 0 to 120. What type of test data is 121?", ["Normal", "Abnormal", "Boundary (just outside)", "Extreme (largest valid)"], "C", "121 is just outside the valid range: boundary data that should be rejected."],
      ["What does a range check do?", ["Checks data was typed correctly twice", "Checks a value is between limits", "Checks a field is not empty", "Checks the length"], "B", "It tests values fall within a set range."],
      ["How does bubble sort work?", ["Splits the list in half", "Repeatedly compares and swaps adjacent items", "Picks a random pivot", "Searches each item"], "B", "Adjacent pairs are swapped until no swaps are needed."],
      ["What is verification?", ["Checking data is reasonable", "Checking data has been entered or copied accurately", "Testing a program", "Sorting data"], "B", "For example double entry or a visual check."],
    ]),
    one("programming", "Programming", "Programming concepts", 9, "Variables, data types, selection, iteration, arrays, procedures and files.", [
      ["Basics", ["Data types: integer, real, char, string, Boolean.", "Variables can change; constants cannot.", "Sequence, selection (IF, CASE) and iteration: count controlled (FOR), pre condition (WHILE), post condition (REPEAT UNTIL)."]],
      ["Further concepts", ["String handling: length, substring, upper, lower.", "Arithmetic: DIV gives the whole number quotient, MOD gives the remainder.", "Procedures do a task; functions return a value. Parameters pass values in. Local variables exist only inside the subroutine.", "Arrays store many items of one type under one name, accessed by index; 2D arrays have rows and columns.", "File handling: open, read, write, close."]],
    ], ["FOR count, WHILE before, REPEAT after.", "Functions return a value.", "MOD remainder, DIV quotient."], [
      ["What is 17 MOD 5?", ["2", "3", "3.4", "12"], "A", "17 = 3 x 5 + 2, remainder 2."],
      ["Which loop always runs at least once?", ["FOR", "WHILE", "REPEAT UNTIL", "IF"], "C", "The condition is checked at the end."],
      ["What is the difference between a function and a procedure?", ["A function returns a value", "A procedure returns a value", "There is no difference", "Functions cannot take parameters"], "A", "Functions return a value to where they were called."],
      ["Which data type stores True or False?", ["Integer", "String", "Boolean", "Real"], "C", "Boolean values are True or False."],
      ["What is 17 DIV 5?", ["2", "3", "3.4", "5"], "B", "DIV gives the whole number part: 3."],
    ]),
    one("databases", "Databases", "Databases and SQL", 6, "Tables, fields, records, primary keys and SQL queries.", [
      ["Structure", ["A table holds records (rows) made of fields (columns).", "A primary key uniquely identifies each record.", "Each field has a data type: text, integer, real, date, Boolean."]],
      ["SQL", ["SELECT fields FROM table WHERE condition ORDER BY field ASC or DESC.", "SUM and COUNT aggregate results.", "Example: SELECT Name FROM Students WHERE Age > 15 ORDER BY Name;"]],
    ], ["Record = row, field = column.", "Primary key is unique.", "SELECT ... FROM ... WHERE ... ORDER BY."], [
      ["What is a primary key?", ["The first field", "A field that uniquely identifies each record", "A password", "A sorted column"], "B", "No two records share a primary key."],
      ["In a database table, what is a record?", ["A column", "A row of data about one item", "A data type", "A query"], "B", "Records are rows."],
      ["Which SQL keyword filters records?", ["SELECT", "FROM", "WHERE", "ORDER BY"], "C", "WHERE sets the condition."],
      ["Which SQL sorts results from Z to A?", ["ORDER BY Name ASC", "ORDER BY Name DESC", "SORT Name", "WHERE Name DESC"], "B", "DESC sorts descending."],
      ["What does COUNT do?", ["Adds values", "Counts the number of records matching", "Sorts records", "Deletes records"], "B", "It returns how many records match."],
    ]),
    one("logic", "Boolean logic", "Logic gates and truth tables", 7, "AND, OR, NOT, NAND, NOR and XOR gates, truth tables and logic expressions.", [
      ["Gates", ["AND: output 1 only if both inputs are 1.", "OR: output 1 if either input is 1.", "NOT: reverses the input.", "NAND: NOT AND. NOR: NOT OR. XOR: output 1 if the inputs are different."]],
      ["Circuits", ["Build truth tables for every combination of inputs: 2 inputs give 4 rows, 3 inputs give 8 rows.", "Write logic expressions such as X = (A AND B) OR NOT C.", "Draw circuits from expressions or problem statements."]],
    ], ["XOR: different inputs give 1.", "n inputs give 2ⁿ rows.", "NAND and NOR are the inverse of AND and OR."], [
      ["What is the output of AND with inputs 1 and 0?", ["0", "1", "2", "Undefined"], "A", "AND needs both inputs to be 1."],
      ["Which gate outputs 1 only when the inputs are different?", ["AND", "OR", "XOR", "NAND"], "C", "Exclusive OR."],
      ["How many rows does a truth table with 3 inputs have?", ["3", "6", "8", "9"], "C", "2³ = 8."],
      ["What is the output of NOR with inputs 0 and 0?", ["0", "1", "Undefined", "2"], "B", "OR gives 0, NOT makes it 1."],
      ["What is the output of NAND with inputs 1 and 1?", ["1", "0", "2", "Undefined"], "B", "AND gives 1, NOT makes it 0."],
    ]),
  ],
};
