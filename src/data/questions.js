
export const questionSets = [
  {
    id: 'Platform Technology',
    subject: 'Sir Jeff',
    description: 'Test your knowledge skills with these challenging problems',
    icon: '🧮',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Computer hardware refers to the physical components of a computer system that you can see and touch.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Hardware includes tangible parts like CPU, monitor, keyboard, mouse, and storage devices.'
      },
      {
      id: 2,
      type: 'multiple-choice',
      question: 'Software and hardware are the same because both are physical components of the computer.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Software consists of programs and instructions; hardware refers to physical parts.'
    },
    {
      id: 3,
      type: 'multiple-choice',
      question: 'The motherboard connects all parts of the computer and allows communication between them.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The motherboard is the main circuit board linking CPU, RAM, storage, and other components.'
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: 'The CPU is commonly referred to as the "brain" of the computer.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The CPU executes instructions and performs arithmetic and logic operations.'
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: 'Random Access Memory (RAM) is permanent storage that keeps data even when the power is turned off.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'RAM is volatile memory and loses its contents when power is removed.'
    },
    {
      id: 6,
      type: 'multiple-choice',
      question: 'A Power Supply Unit (PSU) converts electricity from a wall outlet into usable power for the computer.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The PSU supplies stable power to internal components.'
    },
    {
      id: 7,
      type: 'multiple-choice',
      question: 'Hard Disk Drives (HDDs) are faster than Solid State Drives (SSDs).',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'SSDs are faster because they use flash memory and have no moving parts.'
    },
    {
      id: 8,
      type: 'multiple-choice',
      question: 'Solid State Drives (SSDs) have no moving parts and are typically faster than HDDs.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'SSDs use flash memory which provides faster read/write times than mechanical HDDs.'
    },
    {
      id: 9,
      type: 'multiple-choice',
      question: 'A Graphics Processing Unit (GPU) handles rendering of images, videos, and 3D graphics.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'GPUs are specialized for parallel processing of visual data.'
    },
    {
      id: 10,
      type: 'multiple-choice',
      question: 'An integrated GPU is built into the CPU.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Integrated GPUs are part of the CPU package and share system memory.'
    },
    {
      id: 11,
      type: 'multiple-choice',
      question: 'Cooling systems such as fans and heat sinks help prevent overheating of components.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Fans and heat sinks dissipate heat to prevent damage.'
    },
    {
      id: 12,
      type: 'multiple-choice',
      question: 'Liquid cooling is typically used only for low-performance, budget computers.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Liquid cooling is often used for high-performance systems.'
    },
    {
      id: 13,
      type: 'multiple-choice',
      question: 'The CMOS battery stores the operating system permanently.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The CMOS battery powers BIOS memory for clock and settings, not the OS.'
    },
    {
      id: 14,
      type: 'multiple-choice',
      question: 'PCIe slots are used for connecting modern graphics cards and other high-speed components.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'PCIe is the high-speed interface for GPUs and expansion cards.'
    },
    {
      id: 15,
      type: 'multiple-choice',
      question: 'Monitors and printers are examples of output devices.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Output devices display or produce information from the computer.'
    },
    {
      id: 16,
      type: 'multiple-choice',
      question: 'Microphones and scanners are examples of output devices.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Microphones and scanners are input devices.'
    },
    {
      id: 17,
      type: 'multiple-choice',
      question: 'A router directs data packets between devices and networks.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Routers manage traffic between networks.'
    },
    {
      id: 18,
      type: 'multiple-choice',
      question: 'It is safe to use water to extinguish an electronic fire.',
      choices: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Water can cause electrocution; CO₂ or dry chemical extinguishers are recommended.'
    },
    {
      id: 19,
      type: 'multiple-choice',
      question: 'Anti-static wrist straps protect components from electrostatic discharge (ESD).',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'ESD tools prevent static electricity from damaging sensitive parts.'
    },
    {
      id: 20,
      type: 'multiple-choice',
      question: 'Keeping the work area clean and organized reduces risks when servicing computers.',
      choices: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'A tidy workspace prevents accidents and misplaced parts.'
    },
    {
      id: 21,
      type: 'multiple-choice',
      question: 'Which component is considered the "brain" of the computer?',
      choices: ['Motherboard', 'RAM', 'CPU', 'GPU'],
      correctAnswer: 'CPU',
      explanation: 'The CPU executes program instructions and performs arithmetic and logic operations.'
    },
    {
      id: 22,
      type: 'multiple-choice',
      question: 'Which component connects all other parts of the computer and allows them to communicate?',
      choices: ['Power Supply Unit', 'Motherboard', 'Hard Disk Drive', 'RAM'],
      correctAnswer: 'Motherboard',
      explanation: 'The motherboard is the main circuit board where all components connect and communicate.'
    },
    {
      id: 23,
      type: 'multiple-choice',
      question: 'Which of the following is a volatile memory type?',
      choices: ['HDD', 'SSD', 'RAM', 'ROM'],
      correctAnswer: 'RAM',
      explanation: 'RAM is volatile memory, losing data when the system is powered off.'
    },
    {
      id: 24,
      type: 'multiple-choice',
      question: 'Which storage device uses spinning magnetic disks?',
      choices: ['SSD', 'HDD', 'USB Flash Drive', 'Optical Disc'],
      correctAnswer: 'HDD',
      explanation: 'Hard Disk Drives store data on spinning disks, unlike SSDs which use flash memory.'
    },
    {
      id: 25,
      type: 'multiple-choice',
      question: 'Which component supplies stable power to all internal parts of a computer?',
      choices: ['Motherboard', 'CMOS Battery', 'Power Supply Unit', 'Expansion Card'],
      correctAnswer: 'Power Supply Unit',
      explanation: 'The PSU converts wall outlet electricity into usable power for components.'
    },
    {
      id: 26,
      type: 'multiple-choice',
      question: 'Which of the following is NOT an input device?',
      choices: ['Keyboard', 'Mouse', 'Scanner', 'Printer'],
      correctAnswer: 'Printer',
      explanation: 'A printer is an output device; keyboards, mice, and scanners are input devices.'
    },
    {
      id: 27,
      type: 'multiple-choice',
      question: 'Which of the following is used to render graphics and videos?',
      choices: ['CPU', 'GPU', 'PSU', 'RAM'],
      correctAnswer: 'GPU',
      explanation: 'The Graphics Processing Unit handles rendering of images and video output.'
    },
    {
      id: 28,
      type: 'multiple-choice',
      question: 'Which port is most commonly used to connect high-definition monitors and TVs?',
      choices: ['HDMI', 'VGA', 'Ethernet', 'USB'],
      correctAnswer: 'HDMI',
      explanation: 'HDMI carries high-definition video and audio to displays.'
    },
    {
      id: 29,
      type: 'multiple-choice',
      question: 'Which component stores BIOS settings and keeps system clock running?',
      choices: ['PSU', 'ROM', 'CMOS Battery', 'SSD'],
      correctAnswer: 'CMOS Battery',
      explanation: 'The CMOS battery powers the BIOS memory that stores hardware settings and system time.'
    },
    {
      id: 30,
      type: 'multiple-choice',
      question: 'Which slot replaced older PCI and AGP slots for expansion cards?',
      choices: ['USB', 'SATA', 'PCIe', 'HDMI'],
      correctAnswer: 'PCIe',
      explanation: 'PCI Express is the modern high-speed slot for GPUs and other expansion cards.'
    },
    {
      id: 31,
      type: 'multiple-choice',
      question: 'Which cooling method is typically used for high-performance PCs?',
      choices: ['Passive cooling', 'Liquid cooling', 'Air vents only', 'No cooling'],
      correctAnswer: 'Liquid cooling',
      explanation: 'Liquid cooling is efficient for dissipating heat in high-performance systems.'
    },
    {
      id: 32,
      type: 'multiple-choice',
      question: 'Which of the following is an external storage device?',
      choices: ['CPU', 'External Hard Drive', 'Motherboard', 'GPU'],
      correctAnswer: 'External Hard Drive',
      explanation: 'External hard drives store large amounts of data outside the system unit.'
    },
    {
      id: 33,
      type: 'multiple-choice',
      question: 'Which communication device directs data packets between networks?',
      choices: ['Modem', 'Router', 'Switch', 'NIC'],
      correctAnswer: 'Router',
      explanation: 'Routers manage network traffic and forward data between networks.'
    },
    {
      id: 34,
      type: 'multiple-choice',
      question: 'Which is an example of a diagnostic tool?',
      choices: ['Multimeter', 'Screwdriver', 'Tweezers', 'Compressed Air'],
      correctAnswer: 'Multimeter',
      explanation: 'A multimeter measures voltage, resistance, and current for troubleshooting hardware.'
    },
    {
      id: 35,
      type: 'multiple-choice',
      question: 'Which of the following is considered an output device?',
      choices: ['Scanner', 'Monitor', 'Microphone', 'Keyboard'],
      correctAnswer: 'Monitor',
      explanation: 'A monitor displays visual output from the computer.'
    },
    {
      id: 36,
      type: 'multiple-choice',
      question: 'Which of these tools prevents electrostatic discharge (ESD) damage?',
      choices: ['Anti-static Wrist Strap', 'Heat Gun', 'Nut Driver', 'POST Card'],
      correctAnswer: 'Anti-static Wrist Strap',
      explanation: 'Wrist straps ground technicians to prevent static electricity from damaging components.'
    },
    {
      id: 37,
      type: 'multiple-choice',
      question: 'What type of fire extinguisher should be used on electronic fires?',
      choices: ['Water-based', 'Foam', 'CO₂ or Dry Chemical', 'None'],
      correctAnswer: 'CO₂ or Dry Chemical',
      explanation: 'Electronics require CO₂ or dry chemical extinguishers, not water or foam.'
    },
    {
      id: 38,
      type: 'multiple-choice',
      question: 'Which of these is NOT a type of computer port?',
      choices: ['USB', 'HDMI', 'PCIe', 'VGA'],
      correctAnswer: 'PCIe',
      explanation: 'PCIe is an expansion slot, not an external port.'
    },
    {
      id: 39,
      type: 'multiple-choice',
      question: 'Which of these memory types is non-volatile?',
      choices: ['RAM', 'HDD', 'Cache', 'Registers'],
      correctAnswer: 'HDD',
      explanation: 'HDDs are non-volatile and retain data when power is off.'
    },
    {
      id: 40,
      type: 'multiple-choice',
      question: 'Which of these is a removable storage medium often used in cameras?',
      choices: ['SSD', 'Memory Card', 'Optical Disc', 'ROM'],
      correctAnswer: 'Memory Card',
      explanation: 'Memory cards are portable, removable storage used in cameras and phones.'
    },
    {
      id: 41,
      type: 'multiple-choice',
      question: 'Which part of the computer dissipates heat from the CPU?',
      choices: ['Power Supply', 'Heat Sink', 'RAM', 'Expansion Slot'],
      correctAnswer: 'Heat Sink',
      explanation: 'Heat sinks absorb and disperse heat away from the CPU.'
    },
    {
      id: 42,
      type: 'multiple-choice',
      question: 'Which tool is used to blow dust from computer components?',
      choices: ['Compressed Air', 'Multimeter', 'Screwdriver', 'ESD Mat'],
      correctAnswer: 'Compressed Air',
      explanation: 'Compressed air cleans dust from hardware safely.'
    },
    {
      id: 43,
      type: 'multiple-choice',
      question: 'What does BIOS/UEFI do during system startup?',
      choices: ['Runs antivirus software', 'Initializes hardware and loads OS', 'Increases CPU speed', 'Manages network connections'],
      correctAnswer: 'Initializes hardware and loads OS',
      explanation: 'The BIOS/UEFI initializes system hardware and hands control to the OS bootloader.'
    },
    {
      id: 44,
      type: 'multiple-choice',
      question: 'Which is an example of a hand tool used in computer servicing?',
      choices: ['Tweezers', 'POST Card', 'Multimeter', 'Heat Gun'],
      correctAnswer: 'Tweezers',
      explanation: 'Tweezers are hand tools used to handle small parts safely.'
    },
    {
      id: 45,
      type: 'multiple-choice',
      question: 'Which personal protective equipment (PPE) is recommended during servicing?',
      choices: ['Safety Glasses', 'Wrist Watch', 'Sandals', 'Thick Wool Gloves'],
      correctAnswer: 'Safety Glasses',
      explanation: 'Safety glasses protect eyes from debris or accidental sparks.'
    },
    {
      id: 46,
      type: 'multiple-choice',
      question: 'Which connector type is commonly used for wired LAN connections?',
      choices: ['RJ-45', 'USB-C', 'HDMI', 'SD Card Slot'],
      correctAnswer: 'RJ-45',
      explanation: 'RJ-45 is the connector used for Ethernet networking.'
    },
    {
      id: 47,
      type: 'multiple-choice',
      question: 'Which of the following is a cooling device specifically for graphics cards and CPUs?',
      choices: ['Liquid Cooler', 'Power Supply', 'Router', 'Optical Drive'],
      correctAnswer: 'Liquid Cooler',
      explanation: 'Liquid coolers provide efficient cooling for high-performance GPUs and CPUs.'
    },
    {
      id: 48,
      type: 'multiple-choice',
      question: 'Which of these is a common symptom of a failing hard drive?',
      choices: ['Clicking noises', 'Blue screen errors', 'No display', 'Fan spinning loudly'],
      correctAnswer: 'Clicking noises',
      explanation: 'Clicking noises from HDDs usually indicate mechanical failure.'
    },
    {
      id: 49,
      type: 'multiple-choice',
      question: 'Which of the following best describes an expansion card?',
      choices: ['A card that increases storage', 'A card that adds specialized functions', 'A card that powers the CPU', 'A card that replaces RAM'],
      correctAnswer: 'A card that adds specialized functions',
      explanation: 'Expansion cards like sound cards or NICs add features to a computer system.'
    },
    {
      id: 50,
      type: 'multiple-choice',
      question: 'Which component loses data when the power is turned off?',
      choices: ['RAM', 'ROM', 'HDD', 'SSD'],
      correctAnswer: 'RAM',
      explanation: 'RAM is volatile memory and loses its contents without power.'
    },
    {
      id: 51,
      type: 'multiple-choice',
      question: 'Which is the most important step before working inside a computer?',
      choices: ['Unplugging the system', 'Wearing gloves', 'Checking email', 'Installing software'],
      correctAnswer: 'Unplugging the system',
      explanation: 'Unplugging prevents electrical hazards while working inside a computer.'
    },
    {
      id: 52,
      type: 'multiple-choice',
      question: 'Which of the following is an example of cleaning tool?',
      choices: ['Lint-free cloth', 'SATA Cable', 'Router', 'Heat Sink'],
      correctAnswer: 'Lint-free cloth',
      explanation: 'Lint-free cloths are used to safely clean computer surfaces and parts.'
    },
    {
      id: 53,
      type: 'multiple-choice',
      question: 'Which of the following ports is analog and mostly obsolete?',
      choices: ['VGA', 'HDMI', 'USB-C', 'Thunderbolt'],
      correctAnswer: 'VGA',
      explanation: 'VGA is an older analog port, replaced by HDMI and DisplayPort.'
    },
    {
      id: 54,
      type: 'multiple-choice',
      question: 'Which expansion card provides wireless internet connectivity?',
      choices: ['TV Tuner Card', 'Wi-Fi Card', 'Sound Card', 'Capture Card'],
      correctAnswer: 'Wi-Fi Card',
      explanation: 'Wi-Fi cards allow systems to connect to wireless networks.'
    },
    {
      id: 55,
      type: 'multiple-choice',
      question: 'Which of the following storage devices is fastest for data access?',
      choices: ['HDD', 'SSD', 'Optical Disc', 'USB Flash Drive'],
      correctAnswer: 'SSD',
      explanation: 'SSDs provide the fastest read/write speeds among these options.'
    },
    {
      id: 56,
      type: 'multiple-choice',
      question: 'Which part initializes hardware components during the boot process?',
      choices: ['CPU', 'BIOS/UEFI', 'RAM', 'GPU'],
      correctAnswer: 'BIOS/UEFI',
      explanation: 'The BIOS/UEFI initializes hardware before handing off to the operating system.'
    },
    {
      id: 57,
      type: 'multiple-choice',
      question: 'Which port combines data, video, and power in one connection?',
      choices: ['Thunderbolt', 'HDMI', 'VGA', 'RJ-45'],
      correctAnswer: 'Thunderbolt',
      explanation: 'Thunderbolt ports support data transfer, video output, and power delivery.'
    },
    {
      id: 58,
      type: 'multiple-choice',
      question: 'Which of the following is an example of PPE in computer servicing?',
      choices: ['Anti-static Gloves', 'Wrist Watch', 'Wool Sweater', 'Metal Bracelet'],
      correctAnswer: 'Anti-static Gloves',
      explanation: 'Anti-static gloves protect components and the technician during servicing.'
    },
    {
      id: 59,
      type: 'multiple-choice',
      question: 'Which of the following devices is classified as both input and output?',
      choices: ['Printer-Scanner Combo', 'Keyboard', 'Speaker', 'Monitor'],
      correctAnswer: 'Printer-Scanner Combo',
      explanation: 'A printer-scanner combo can input documents and output hard copies.'
    },
    {
      id: 60,
      type: 'multiple-choice',
      question: 'Which device converts signals for internet access over phone or cable lines?',
      choices: ['Router', 'Modem', 'Switch', 'NIC'],
      correctAnswer: 'Modem',
      explanation: 'A modem modulates/demodulates signals for internet connectivity.'
    },
        {
      id: 61,
      type: 'multiple-choice',
      question: 'Which of the following best describes computer hardware?',
      choices: ['Programs and instructions', 'Physical components of a computer', 'Online services', 'Cloud storage'],
      correctAnswer: 'Physical components of a computer',
      explanation: 'Hardware refers to tangible computer parts like CPU, motherboard, and storage devices.'
    },
    {
      id: 62,
      type: 'multiple-choice',
      question: 'Which is an example of an input device?',
      choices: ['Printer', 'Monitor', 'Scanner', 'Speaker'],
      correctAnswer: 'Scanner',
      explanation: 'Scanners capture images and convert them into digital form, making them input devices.'
    },
    {
      id: 63,
      type: 'multiple-choice',
      question: 'Which of the following is a primary role of the motherboard?',
      choices: ['Power generation', 'Data backup', 'Component communication', 'Cooling'],
      correctAnswer: 'Component communication',
      explanation: 'The motherboard connects components and allows communication between them.'
    },
    {
      id: 64,
      type: 'multiple-choice',
      question: 'What does RAM stand for?',
      choices: ['Random Access Memory', 'Read Active Memory', 'Read After Memory', 'Rapid Access Machine'],
      correctAnswer: 'Random Access Memory',
      explanation: 'RAM is temporary memory for quick access by the CPU.'
    },
    {
      id: 65,
      type: 'multiple-choice',
      question: 'Which is the main function of a PSU (Power Supply Unit)?',
      choices: ['Store data', 'Convert electrical power', 'Control input devices', 'Display images'],
      correctAnswer: 'Convert electrical power',
      explanation: 'The PSU converts electricity from the wall into usable power for components.'
    },
    {
      id: 66,
      type: 'multiple-choice',
      question: 'Which component is responsible for arithmetic and logic operations?',
      choices: ['GPU', 'CPU', 'PSU', 'Motherboard'],
      correctAnswer: 'CPU',
      explanation: 'The CPU executes program instructions including arithmetic and logic.'
    },
    {
      id: 67,
      type: 'multiple-choice',
      question: 'Which type of memory is non-volatile and permanent?',
      choices: ['RAM', 'ROM', 'Cache', 'Registers'],
      correctAnswer: 'ROM',
      explanation: 'ROM stores firmware and does not lose data when powered off.'
    },
    {
      id: 68,
      type: 'multiple-choice',
      question: 'Which of the following is a portable storage device?',
      choices: ['SSD', 'USB Flash Drive', 'CPU', 'Monitor'],
      correctAnswer: 'USB Flash Drive',
      explanation: 'USB flash drives provide portable storage for transferring files.'
    },
    {
      id: 69,
      type: 'multiple-choice',
      question: 'Which component helps prevent overheating by dissipating heat?',
      choices: ['PSU', 'Heat Sink', 'NIC', 'SSD'],
      correctAnswer: 'Heat Sink',
      explanation: 'Heat sinks and fans dissipate heat from hot components.'
    },
    {
      id: 70,
      type: 'multiple-choice',
      question: 'Which expansion card provides audio output?',
      choices: ['NIC', 'Sound Card', 'GPU', 'TV Tuner Card'],
      correctAnswer: 'Sound Card',
      explanation: 'Sound cards handle audio input/output for the computer.'
    },
    {
      id: 71,
      type: 'multiple-choice',
      question: 'What does GPU stand for?',
      choices: ['General Processing Unit', 'Graphical Performance Unit', 'Graphics Processing Unit', 'Global Power Unit'],
      correctAnswer: 'Graphics Processing Unit',
      explanation: 'The GPU processes graphics, video, and image rendering.'
    },
    {
      id: 72,
      type: 'multiple-choice',
      question: 'Which type of RAM is the newest among the following?',
      choices: ['DDR3', 'DDR4', 'DDR5', 'DDR2'],
      correctAnswer: 'DDR5',
      explanation: 'DDR5 is the latest generation of RAM offering higher speeds and efficiency.'
    },
    {
      id: 73,
      type: 'multiple-choice',
      question: 'Which of these is an example of an optical storage medium?',
      choices: ['DVD', 'SSD', 'Flash Drive', 'HDD'],
      correctAnswer: 'DVD',
      explanation: 'DVDs and CDs are optical media read by laser drives.'
    },
    {
      id: 74,
      type: 'multiple-choice',
      question: 'Which tool helps measure voltage and continuity?',
      choices: ['POST Card', 'Multimeter', 'Compressed Air', 'Anti-static Mat'],
      correctAnswer: 'Multimeter',
      explanation: 'A multimeter measures voltage, current, and resistance.'
    },
    {
      id: 75,
      type: 'multiple-choice',
      question: 'Which of these ports is used for legacy video connections?',
      choices: ['HDMI', 'VGA', 'USB-C', 'RJ-45'],
      correctAnswer: 'VGA',
      explanation: 'VGA is an older analog video port for monitors and projectors.'
    },
    {
      id: 76,
      type: 'multiple-choice',
      question: 'Which port is the standard for modern displays and supports both video and audio?',
      choices: ['VGA', 'Ethernet', 'HDMI', 'Serial'],
      correctAnswer: 'HDMI',
      explanation: 'HDMI supports digital video and audio transmission.'
    },
    {
      id: 77,
      type: 'multiple-choice',
      question: 'Which of the following describes a NIC?',
      choices: ['Network Interface Card', 'New Internal Connector', 'Non-Integrated Chip', 'Network Information Cable'],
      correctAnswer: 'Network Interface Card',
      explanation: 'A NIC allows a computer to connect to a network.'
    },
    {
      id: 78,
      type: 'multiple-choice',
      question: 'Which of the following is an example of PPE (Personal Protective Equipment)?',
      choices: ['Safety Glasses', 'Screwdriver', 'Router', 'RJ-45 Cable'],
      correctAnswer: 'Safety Glasses',
      explanation: 'PPE like safety glasses protect technicians during servicing.'
    },
    {
      id: 79,
      type: 'multiple-choice',
      question: 'Which cleaning tool should be used to safely remove dust from delicate components?',
      choices: ['Cloth with water', 'Compressed Air', 'Steel Brush', 'Vacuum Cleaner'],
      correctAnswer: 'Compressed Air',
      explanation: 'Compressed air is safe for removing dust without damaging circuits.'
    },
    {
      id: 80,
      type: 'multiple-choice',
      question: 'Which type of memory allows fast access to frequently used instructions and is inside the CPU?',
      choices: ['Cache Memory', 'RAM', 'ROM', 'SSD'],
      correctAnswer: 'Cache Memory',
      explanation: 'Cache is high-speed memory located inside or near the CPU.'
    },
    {
      id: 81,
      type: 'multiple-choice',
      question: 'Which of the following components stores the operating system and user files permanently?',
      choices: ['RAM', 'CPU', 'HDD/SSD', 'GPU'],
      correctAnswer: 'HDD/SSD',
      explanation: 'Hard drives and SSDs provide permanent storage for OS and data.'
    },
    {
      id: 82,
      type: 'multiple-choice',
      question: 'Which component provides backup power to keep BIOS settings?',
      choices: ['PSU', 'CMOS Battery', 'RAM', 'NIC'],
      correctAnswer: 'CMOS Battery',
      explanation: 'The CMOS battery keeps BIOS/UEFI memory powered for system time and settings.'
    },
    {
      id: 83,
      type: 'multiple-choice',
      question: 'Which of the following is a primary symptom of CPU overheating?',
      choices: ['Clicking noises', 'Sudden shutdowns', 'No boot beep', 'No network access'],
      correctAnswer: 'Sudden shutdowns',
      explanation: 'Overheating CPUs often cause automatic shutdowns to prevent damage.'
    },
    {
      id: 84,
      type: 'multiple-choice',
      question: 'Which slot would you use to install a modern graphics card?',
      choices: ['PCI', 'AGP', 'PCIe', 'SATA'],
      correctAnswer: 'PCIe',
      explanation: 'PCIe slots are designed for high-speed components like GPUs.'
    },
    {
      id: 85,
      type: 'multiple-choice',
      question: 'Which of these is an example of a communication device?',
      choices: ['Router', 'Mouse', 'Printer', 'Scanner'],
      correctAnswer: 'Router',
      explanation: 'Routers manage communication between networks and devices.'
    },
    {
      id: 86,
      type: 'multiple-choice',
      question: 'Which tool prevents static electricity damage when worn on the wrist?',
      choices: ['Anti-static Wrist Strap', 'Screwdriver', 'Pliers', 'Heat Gun'],
      correctAnswer: 'Anti-static Wrist Strap',
      explanation: 'Anti-static wrist straps ground the user to prevent ESD damage.'
    },
    {
      id: 87,
      type: 'multiple-choice',
      question: 'Which best practice ensures professionalism during computer servicing?',
      choices: ['Skipping documentation', 'Following manuals and preventive maintenance', 'Avoiding PPE', 'Working in clutter'],
      correctAnswer: 'Following manuals and preventive maintenance',
      explanation: 'Best practices include proper documentation, maintenance, and ethics.'
    },
    {
      id: 88,
      type: 'multiple-choice',
      question: 'Which is NOT a type of hand tool?',
      choices: ['Screwdriver', 'Pliers', 'Nut Driver', 'Multimeter'],
      correctAnswer: 'Multimeter',
      explanation: 'A multimeter is a diagnostic tool, not a hand tool.'
    },
    {
      id: 89,
      type: 'multiple-choice',
      question: 'Which file storage medium uses flash memory?',
      choices: ['HDD', 'SSD', 'DVD', 'Blu-ray'],
      correctAnswer: 'SSD',
      explanation: 'Solid State Drives use flash memory for storage with no moving parts.'
    },
    {
      id: 90,
      type: 'multiple-choice',
      question: 'Which of these devices is used to project computer visuals onto a large screen?',
      choices: ['Printer', 'Projector', 'Monitor', 'Router'],
      correctAnswer: 'Projector',
      explanation: 'Projectors display a computer’s visual output on a larger surface.'
    },
    {
      id: 91,
      type: 'multiple-choice',
      question: 'Which hardware component is essential for multitasking performance?',
      choices: ['PSU', 'RAM', 'Printer', 'Router'],
      correctAnswer: 'RAM',
      explanation: 'More RAM allows smoother multitasking by holding more active data.'
    },
    {
      id: 92,
      type: 'multiple-choice',
      question: 'Which of these is a removable, portable storage medium?',
      choices: ['Optical Disc', 'CPU', 'Motherboard', 'GPU'],
      correctAnswer: 'Optical Disc',
      explanation: 'Optical discs like CDs and DVDs are removable media for storage.'
    },
    {
      id: 93,
      type: 'multiple-choice',
      question: 'Which is the correct power connector for modern motherboards?',
      choices: ['20/24-pin ATX', 'RJ-45', 'HDMI', 'USB'],
      correctAnswer: '20/24-pin ATX',
      explanation: 'Motherboards use 20/24-pin ATX connectors for power delivery.'
    },
    {
      id: 94,
      type: 'multiple-choice',
      question: 'Which of these ports supports very high data transfer speeds and docking stations?',
      choices: ['USB-C', 'Thunderbolt', 'HDMI', 'VGA'],
      correctAnswer: 'Thunderbolt',
      explanation: 'Thunderbolt supports high-speed data, video, and power delivery.'
    },
    {
      id: 95,
      type: 'multiple-choice',
      question: 'Which tool is commonly used for opening computer casings?',
      choices: ['Screwdriver', 'Multimeter', 'Tweezers', 'Heat Gun'],
      correctAnswer: 'Screwdriver',
      explanation: 'Screwdrivers are basic tools for opening and assembling computer parts.'
    },
    {
      id: 96,
      type: 'multiple-choice',
      question: 'Which best describes an external hard drive?',
      choices: ['Portable storage device', 'Input device', 'Cooling component', 'Network device'],
      correctAnswer: 'Portable storage device',
      explanation: 'External hard drives provide portable data storage outside the system.'
    },
    {
      id: 97,
      type: 'multiple-choice',
      question: 'Which connector type is typically used for audio devices like headphones?',
      choices: ['RJ-45', 'HDMI', '3.5mm Jack', 'SATA'],
      correctAnswer: '3.5mm Jack',
      explanation: '3.5mm jacks are standard for connecting headphones and microphones.'
    },
    {
      id: 98,
      type: 'multiple-choice',
      question: 'Which is NOT an output device?',
      choices: ['Printer', 'Monitor', 'Speaker', 'Keyboard'],
      correctAnswer: 'Keyboard',
      explanation: 'Keyboards are input devices, not output devices.'
    },
    {
      id: 99,
      type: 'multiple-choice',
      question: 'Which device provides both data and power delivery to peripherals?',
      choices: ['USB', 'VGA', 'HDMI', 'NIC'],
      correctAnswer: 'USB',
      explanation: 'USB ports provide both power and data transfer to devices.'
    },
    {
      id: 100,
      type: 'multiple-choice',
      question: 'Which of the following is essential for preventing accidents while servicing computers?',
      choices: ['Organized workplace', 'Skipping manuals', 'Carpeted floor', 'Using water near electronics'],
      correctAnswer: 'Organized workplace',
      explanation: 'A clean, organized workspace minimizes risks and improves safety.'
    }

    ]
  },
  {
    id: 'IAS',
    subject: "Ma'am Jessa",
    description: 'Improve your understanding in computer security',
    icon: '📚',
    questions: [
      [
  // ============================
  // MULTIPLE CHOICE (1–40)
  // ============================
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary purpose of risk management in cybersecurity?',
    choices: ['To eliminate all risks', 'To identify, assess, and mitigate risks', 'To transfer risks only', 'To create firewalls'],
    correctAnswer: 'To identify, assess, and mitigate risks',
    explanation: 'Risk management focuses on identifying, assessing, and mitigating risks to organizational assets.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is considered an asset?',
    choices: ['Hackers', 'Vulnerability', 'Data', 'Threat'],
    correctAnswer: 'Data',
    explanation: 'Assets are anything of value, including data, people, and hardware.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which risk mitigation strategy involves purchasing insurance?',
    choices: ['Avoidance', 'Mitigation', 'Acceptance', 'Transfer'],
    correctAnswer: 'Transfer',
    explanation: 'Risk transference typically involves shifting responsibility, often by purchasing insurance.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which standard is U.S. federal government–focused and cybersecurity-centered?',
    choices: ['ISO 31000', 'NIST RMF', 'PCI-DSS', 'COBIT'],
    correctAnswer: 'NIST RMF',
    explanation: 'The NIST Risk Management Framework (RMF) is primarily applied in U.S. federal government contexts with a cybersecurity focus.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the key difference between BCP and DRP?',
    choices: ['BCP is technical, DRP is organizational', 'BCP focuses on whole organization, DRP on IT/data recovery', 'BCP is optional, DRP is mandatory', 'They are the same'],
    correctAnswer: 'BCP focuses on whole organization, DRP on IT/data recovery',
    explanation: 'Business Continuity Plans (BCP) ensure organizational operations, while Disaster Recovery Plans (DRP) restore IT systems and data.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following is a physical security control?',
    choices: ['Firewalls', 'Encryption', 'Cable locks', 'VPN'],
    correctAnswer: 'Cable locks',
    explanation: 'Physical controls include locks, guards, and cable locks.'
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the main function of a proxy firewall?',
    choices: ['Encrypt data traffic', 'Filter packets only', 'Act as a middleman and hide IP addresses', 'Provide symmetric encryption'],
    correctAnswer: 'Act as a middleman and hide IP addresses',
    explanation: 'Proxy firewalls act as intermediaries, masking the client IP for added protection.'
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which encryption method uses a single shared key?',
    choices: ['RSA', 'AES', 'SHA-256', 'Digital Signature'],
    correctAnswer: 'AES',
    explanation: 'AES is a symmetric encryption algorithm, meaning the same key is used for encryption and decryption.'
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Which encryption algorithm uses public and private keys?',
    choices: ['AES', 'RSA', 'MD5', 'SHA-1'],
    correctAnswer: 'RSA',
    explanation: 'RSA is an asymmetric encryption algorithm that relies on public/private key pairs.'
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Which cybersecurity role is responsible for strategic security vision?',
    choices: ['Security Analyst', 'Security Engineer', 'CISO', 'Incident Responder'],
    correctAnswer: 'CISO',
    explanation: 'The Chief Information Security Officer (CISO) provides strategic direction and oversight for organizational security.'
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: 'Which historical incident highlighted the importance of availability in security?',
    choices: ['Target Breach (2013)', 'Morris Worm (1988)', 'Equifax Breach (2017)', 'Stuxnet Attack'],
    correctAnswer: 'Morris Worm (1988)',
    explanation: 'The Morris Worm disrupted systems and emphasized availability in cybersecurity.'
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'What is the main principle behind Role-Based Access Control (RBAC)?',
    choices: ['Passwords must be complex', 'Access is based on seniority', 'Access is granted based on job role and least privilege', 'Every user has full system access'],
    correctAnswer: 'Access is granted based on job role and least privilege',
    explanation: 'RBAC grants access rights based on job functions and enforces least privilege.'
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: 'Which acronym represents Recovery Time Objective?',
    choices: ['RPO', 'RTO', 'BCP', 'IRP'],
    correctAnswer: 'RTO',
    explanation: 'RTO (Recovery Time Objective) is the maximum time allowed to restore systems after disruption.'
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a security control type?',
    choices: ['Environmental', 'Physical', 'Technical', 'Administrative'],
    correctAnswer: 'Administrative',
    explanation: 'The study guide lists Environmental, Physical, and Technical controls, but Administrative was not mentioned.'
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: 'Which type of firewall filters traffic based only on headers like source and destination?',
    choices: ['Stateful', 'Packet Filtering', 'Proxy', 'Next-Generation'],
    correctAnswer: 'Packet Filtering',
    explanation: 'Packet filtering firewalls only check packet header information.'
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: 'Which regulation requires specific and clear user consent in Europe?',
    choices: ['Cybercrime Prevention Act', 'Data Privacy Act (PH)', 'GDPR', 'Budapest Convention'],
    correctAnswer: 'GDPR',
    explanation: 'The General Data Protection Regulation requires consent to be specific and unambiguous.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: 'Which Philippine law punishes sharing pirated software?',
    choices: ['Cybercrime Prevention Act', 'Data Privacy Act', 'GDPR', 'PCI-DSS'],
    correctAnswer: 'Cybercrime Prevention Act',
    explanation: 'The Cybercrime Prevention Act of the Philippines punishes content-related offenses like piracy.'
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: 'Which acronym represents the professional code requiring confidentiality, integrity, and competence?',
    choices: ['PCI-DSS', 'CISSP', 'ACM', 'ISACA'],
    correctAnswer: 'CISSP',
    explanation: 'The CISSP Code of Ethics emphasizes confidentiality, integrity, and professional conduct.'
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: 'Which attack type alters or destroys data, threatening integrity?',
    choices: ['Passive Attack', 'Active Attack', 'Phishing Attack', 'SQL Injection'],
    correctAnswer: 'Active Attack',
    explanation: 'Active attacks alter or destroy data, threatening integrity.'
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: 'Which role is primarily responsible for monitoring threats and assessing risks?',
    choices: ['Security Engineer', 'Incident Responder', 'Security Analyst', 'CISO'],
    correctAnswer: 'Security Analyst',
    explanation: 'Security Analysts perform continuous monitoring and assess risks.'
  },

  {
    id: 21,
    type: 'multiple-choice',
    question: 'What does a Disaster Recovery Plan (DRP) primarily restore?',
    choices: ['Entire organizational operations', 'Policies and procedures', 'IT infrastructure and data', 'Employee access cards'],
    correctAnswer: 'IT infrastructure and data',
    explanation: 'DRPs restore IT systems and data after disruption.'
  },
  {
    id: 22,
    type: 'multiple-choice',
    question: 'Which cryptographic method ensures non-repudiation?',
    choices: ['AES', 'RSA', 'Digital Signatures', 'VPN'],
    correctAnswer: 'Digital Signatures',
    explanation: 'Digital signatures ensure authentication and non-repudiation.'
  },
  {
    id: 23,
    type: 'multiple-choice',
    question: 'Which acronym refers to Open Web Application Security Project?',
    choices: ['OWASP', 'OSSP', 'OASIS', 'OPENSEC'],
    correctAnswer: 'OWASP',
    explanation: 'OWASP is the Open Web Application Security Project.'
  },
  {
    id: 24,
    type: 'multiple-choice',
    question: 'Which plan is compared to a fire drill in cybersecurity preparedness?',
    choices: ['Risk Management Plan', 'Incident Response Plan', 'Business Continuity Plan', 'Disaster Recovery Plan'],
    correctAnswer: 'Incident Response Plan',
    explanation: 'Incident Response Plans are like fire drills to ensure readiness for attacks.'
  },
  {
    id: 25,
    type: 'multiple-choice',
    question: 'Which of the following is an environmental control?',
    choices: ['Encryption', 'HVAC', 'Cable locks', 'Passwords'],
    correctAnswer: 'HVAC',
    explanation: 'Environmental controls include HVAC and fire suppression systems.'
  },
  {
    id: 26,
    type: 'multiple-choice',
    question: 'What is the role of a Data Protection Officer (DPO)?',
    choices: ['Monitor financial audits', 'Handle sensitive data and ensure compliance', 'Design encryption algorithms', 'Investigate cybercrime'],
    correctAnswer: 'Handle sensitive data and ensure compliance',
    explanation: 'Organizations handling sensitive data must appoint a Data Protection Officer for accountability.'
  },
  {
    id: 27,
    type: 'multiple-choice',
    question: 'What was the main lesson from the Target Breach of 2013?',
    choices: ['Need for stronger firewalls', 'Importance of encryption', 'Ignoring warnings leads to major losses', 'Password reuse dangers'],
    correctAnswer: 'Ignoring warnings leads to major losses',
    explanation: 'The Target breach demonstrated the severe consequences of ignoring security alerts.'
  },
  {
    id: 28,
    type: 'multiple-choice',
    question: 'Which attack is stealthy and harder to detect because it does not alter data?',
    choices: ['Active Attack', 'Passive Attack', 'DoS Attack', 'Phishing'],
    correctAnswer: 'Passive Attack',
    explanation: 'Passive attacks quietly observe data and are harder to detect.'
  },
  {
    id: 29,
    type: 'multiple-choice',
    question: 'Which legal framework promotes international cooperation against cybercrime?',
    choices: ['GDPR', 'Budapest Convention', 'PCI-DSS', 'COBIT'],
    correctAnswer: 'Budapest Convention',
    explanation: 'The Budapest Convention harmonizes and promotes cross-border cooperation against cybercrime.'
  },
  {
    id: 30,
    type: 'multiple-choice',
    question: 'Which professional ethics violation involves falsifying audit reports?',
    choices: ['Confidentiality breach', 'Integrity violation', 'Competence issue', 'Accountability gap'],
    correctAnswer: 'Integrity violation',
    explanation: 'Falsifying reports violates the integrity principle in ISACA ethics.'
  },
  {
    id: 31,
    type: 'multiple-choice',
    question: 'Which principle of the CIA triad restricts access to authorized users only?',
    choices: ['Integrity', 'Confidentiality', 'Availability', 'Accountability'],
    correctAnswer: 'Confidentiality',
    explanation: 'Confidentiality ensures information is only accessible to authorized users.'
  },
  {
    id: 32,
    type: 'multiple-choice',
    question: 'Which advantage of Secure SDLC (SSDLC) is noted in the study guide?',
    choices: ['Time saving', 'Improved security and compliance', 'Less project management', 'Higher adaptability'],
    correctAnswer: 'Improved security and compliance',
    explanation: 'SSDLC improves security and facilitates compliance, though it is time-consuming.'
  },
  {
    id: 33,
    type: 'multiple-choice',
    question: 'Which disadvantage of SSDLC is mentioned?',
    choices: ['Improved project management', 'Limited adaptability and time-consuming', 'Lack of security integration', 'Weaker compliance'],
    correctAnswer: 'Limited adaptability and time-consuming',
    explanation: 'SSDLC takes more time and offers less adaptability.'
  },
  {
    id: 34,
    type: 'multiple-choice',
    question: 'Which cryptographic tool ensures data integrity?',
    choices: ['Digital Signatures', 'Hash Functions', 'AES', 'RSA'],
    correctAnswer: 'Hash Functions',
    explanation: 'Hash functions verify data integrity.'
  },
  {
    id: 35,
    type: 'multiple-choice',
    question: 'Which type of risk strategy removes all internet access?',
    choices: ['Acceptance', 'Mitigation', 'Avoidance', 'Transfer'],
    correctAnswer: 'Avoidance',
    explanation: 'Extreme risk avoidance involves removing exposure, such as disconnecting internet access.'
  },
  {
    id: 36,
    type: 'multiple-choice',
    question: 'What is the correct definition of RPO?',
    choices: ['Recovery Point Objective – maximum acceptable data loss', 'Recovery Time Objective – system restore time', 'Risk Policy Objective – compliance rules', 'Remote Processing Objective – network recovery'],
    correctAnswer: 'Recovery Point Objective – maximum acceptable data loss',
    explanation: 'RPO specifies how much data loss is acceptable in disaster recovery.'
  },
  {
    id: 37,
    type: 'multiple-choice',
    question: 'Which of the following is a technical control?',
    choices: ['Encryption', 'Cable locks', 'HVAC', 'Fire extinguishers'],
    correctAnswer: 'Encryption',
    explanation: 'Technical controls include firewalls, VPNs, and encryption.'
  },
  {
    id: 38,
    type: 'multiple-choice',
    question: 'Which practice balances strong security and usability?',
    choices: ['Complex passwords only', 'Biometric login', 'Removing access control', 'Using default accounts'],
    correctAnswer: 'Biometric login',
    explanation: 'Biometric login is given as an example of balancing security with usability.'
  },
  {
    id: 39,
    type: 'multiple-choice',
    question: 'Which organization’s ethics code highlights competence as a principle?',
    choices: ['ISACA', 'CISSP', 'ACM', 'GDPR'],
    correctAnswer: 'ACM',
    explanation: 'The ACM code emphasizes competence as a professional ethical principle.'
  },
  {
    id: 40,
    type: 'multiple-choice',
    question: 'Which type of insurance is considered a risk transference strategy?',
    choices: ['Life Insurance', 'Cyber Insurance', 'Property Insurance', 'Health Insurance'],
    correctAnswer: 'Cyber Insurance',
    explanation: 'Cyber insurance is used to transfer risk in cybersecurity contexts.'
  },

  // ============================
  // TRUE/FALSE (41–60)
  // ============================
  {
    id: 41,
    type: 'multiple-choice',
    question: 'Risk management eliminates all risks.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Risk management reduces risks but cannot eliminate them entirely.'
  },
  {
    id: 42,
    type: 'multiple-choice',
    question: 'RTO measures acceptable data loss in a disaster recovery plan.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'RTO is about recovery time; RPO measures data loss.'
  },
  {
    id: 43,
    type: 'multiple-choice',
    question: 'Disaster Recovery Plans (DRP) focus on restoring IT infrastructure and data.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'DRPs specifically restore IT systems and data.'
  },
  {
    id: 44,
    type: 'multiple-choice',
    question: 'RBAC grants access based on job role and enforces least privilege.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'RBAC is designed to enforce least privilege by role.'
  },
  {
    id: 45,
    type: 'multiple-choice',
    question: 'Standards are optional and not enforceable.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Standards are measurable and enforceable rules supporting policies.'
  },
  {
    id: 46,
    type: 'multiple-choice',
    question: 'Morris Worm of 1988 highlighted confidentiality as the primary risk.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'It highlighted availability as the primary risk.'
  },
  {
    id: 47,
    type: 'multiple-choice',
    question: 'Security should only be added after deployment in SDLC.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Security must be integrated early in the SDLC.'
  },
  {
    id: 48,
    type: 'multiple-choice',
    question: 'People can be both a component and a source of security risk.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Employees are part of security but also introduce risks.'
  },
  {
    id: 49,
    type: 'multiple-choice',
    question: 'The disposal phase in SDLC has no security risks.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Disposal introduces risks of data leakage if not handled securely.'
  },
  {
    id: 50,
    type: 'multiple-choice',
    question: 'Biometric login is an example of balancing usability and security.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'It provides both strong authentication and user convenience.'
  },
  {
    id: 51,
    type: 'multiple-choice',
    question: 'The CISO is responsible for writing code for applications.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'CISO provides strategic vision, not programming tasks.'
  },
  {
    id: 52,
    type: 'multiple-choice',
    question: 'SSDLC has the disadvantage of being time-consuming and less adaptable.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'SSDLC increases security but requires more time and has lower adaptability.'
  },
  {
    id: 53,
    type: 'multiple-choice',
    question: 'Security Analysts primarily perform risk assessments and monitoring.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Security Analysts are tasked with monitoring threats and risks.'
  },
  {
    id: 54,
    type: 'multiple-choice',
    question: 'Ignoring security warnings usually results in minor consequences.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Ignoring warnings often leads to severe costs and damages.'
  },
  {
    id: 55,
    type: 'multiple-choice',
    question: 'Secure disposal of equipment prevents unauthorized access.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Proper disposal ensures data cannot be retrieved by unauthorized parties.'
  },
  {
    id: 56,
    type: 'multiple-choice',
    question: 'Confidentiality means accuracy of data.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Confidentiality is about authorized access, not accuracy.'
  },
  {
    id: 57,
    type: 'multiple-choice',
    question: 'Outdated systems must be upgraded immediately to reduce risks.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'System upgrades are essential to avoid vulnerabilities.'
  },
  {
    id: 58,
    type: 'multiple-choice',
    question: 'Public vulnerability disclosure without notice is called responsible disclosure.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'It is called full disclosure and may be harmful.'
  },
  {
    id: 59,
    type: 'multiple-choice',
    question: 'Whistleblowing is ethical if done for the public good.',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Whistleblowing can be ethical when exposing wrongdoing for the greater good.'
  },
  {
    id: 60,
    type: 'multiple-choice',
    question: 'Removing all internet access is a practical way to manage risk.',
    choices: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Extreme avoidance is effective but impractical in real-world use.'
  },

  // ============================
  // SHORT ANSWER (61–80)
  // ============================
  {
    id: 61,
    type: 'short-answer',
    question: 'What does CIA stand for in the CIA Triad?',
    correctAnswer: 'Confidentiality, Integrity, Availability',
    explanation: 'CIA Triad represents the three core principles of information security.'
  },
  {
    id: 62,
    type: 'short-answer',
    question: 'What was the main lesson from the Morris Worm (1988)?',
    correctAnswer: 'The importance of availability',
    explanation: 'The worm highlighted how attacks can affect system availability.'
  },
  {
    id: 63,
    type: 'short-answer',
    question: 'Which law in the Philippines punishes sharing pirated software?',
    correctAnswer: 'Cybercrime Prevention Act',
    explanation: 'The Cybercrime Prevention Act addresses offenses like software piracy.'
  },
  {
    id: 64,
    type: 'short-answer',
    question: 'What does RPO stand for?',
    correctAnswer: 'Recovery Point Objective',
    explanation: 'RPO represents the maximum acceptable data loss in disaster recovery.'
  },
  {
    id: 65,
    type: 'short-answer',
    question: 'Which international regulation requires clear and specific consent?',
    correctAnswer: 'GDPR',
    explanation: 'GDPR emphasizes explicit and clear user consent.'
  },
  {
    id: 66,
    type: 'short-answer',
    question: 'What is the main focus of a Disaster Recovery Plan (DRP)?',
    correctAnswer: 'Restoring IT systems and data',
    explanation: 'DRPs are designed to restore infrastructure and data after disruptions.'
  },
  {
    id: 67,
    type: 'short-answer',
    question: 'What does RBAC stand for?',
    correctAnswer: 'Role-Based Access Control',
    explanation: 'RBAC grants access rights based on user job roles and least privilege.'
  },
  {
    id: 68,
    type: 'short-answer',
    question: 'Which professional role provides strategic vision of security?',
    correctAnswer: 'CISO',
    explanation: 'The Chief Information Security Officer provides the security strategy and vision.'
  },
  {
    id: 69,
    type: 'short-answer',
    question: 'What does VPN stand for?',
    correctAnswer: 'Virtual Private Network',
    explanation: 'VPNs encrypt traffic and provide secure remote access.'
  },
  {
    id: 70,
    type: 'short-answer',
    question: 'What principle ensures that data cannot be altered without detection?',
    correctAnswer: 'Integrity',
    explanation: 'Integrity means data remains accurate and unchanged unless authorized.'
  },
  {
    id: 71,
    type: 'short-answer',
    question: 'Which security plan is compared to a fire drill?',
    correctAnswer: 'Incident Response Plan',
    explanation: 'Incident Response Plans ensure readiness similar to fire drills.'
  },
  {
    id: 72,
    type: 'short-answer',
    question: 'What does AES stand for?',
    correctAnswer: 'Advanced Encryption Standard',
    explanation: 'AES is a symmetric encryption standard.'
  },
  {
    id: 73,
    type: 'short-answer',
    question: 'What is the main role of Security Analysts?',
    correctAnswer: 'Risk assessment and monitoring',
    explanation: 'Analysts focus on assessing risks and monitoring threats.'
  },
  {
    id: 74,
    type: 'short-answer',
    question: 'What is the maximum time systems can be down according to RTO?',
    correctAnswer: 'Recovery Time Objective',
    explanation: 'RTO defines how quickly systems must be restored.'
  },
  {
    id: 75,
    type: 'short-answer',
    question: 'What acronym refers to Secure System Development Life Cycle?',
    correctAnswer: 'SSDLC',
    explanation: 'SSDLC integrates security early in system development.'
  },
  {
    id: 76,
    type: 'short-answer',
    question: 'Which cryptographic method uses hashing to verify integrity?',
    correctAnswer: 'Hash Functions',
    explanation: 'Hashes ensure data has not been altered.'
  },
  {
    id: 77,
    type: 'short-answer',
    question: 'What principle of security is violated if power surge destroys servers?',
    correctAnswer: 'Availability',
    explanation: 'Availability ensures systems and data remain accessible when needed.'
  },
  {
    id: 78,
    type: 'short-answer',
    question: 'What is the main purpose of Business Continuity Planning (BCP)?',
    correctAnswer: 'Ensure entire organization continues operations during disruptions',
    explanation: 'BCPs allow organizational functions to continue even during crises.'
  },
  {
    id: 79,
    type: 'short-answer',
    question: 'What does DPO stand for?',
    correctAnswer: 'Data Protection Officer',
    explanation: 'The DPO ensures compliance when handling sensitive data.'
  },
  {
    id: 80,
    type: 'short-answer',
    question: 'What does DRM stand for in intellectual property protection?',
    correctAnswer: 'Digital Rights Management',
    explanation: 'DRM protects intellectual property and prevents piracy.'
  }
]

    ]
  }
  
  // ,
  // {
  //   id: 'history',
  //   subject: 'World History',
  //   description: 'Journey through important historical events',
  //   icon: '🏛️',
  //   questions: [
  //     {
  //       id: 1,
  //       type: 'multiple-choice',
  //       question: 'In which year did World War II end?',
  //       choices: ['1944', '1945', '1946', '1947'],
  //       correctAnswer: '1945',
  //       explanation: 'World War II ended in 1945 with the surrender of Germany and Japan'
  //     },
  //     {
  //       id: 2,
  //       type: 'short-answer',
  //       question: 'Who was the first President of the United States?',
  //       correctAnswer: 'George Washington',
  //       explanation: 'George Washington served as the first President from 1789 to 1797'
  //     }
  //   ]
  // }
];