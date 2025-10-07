
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
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the main limitation of relying only on technical defenses for security?',
        choices: ['They are too costly', 'They ignore employee training', 'They require cloud support', 'They are not encrypted'],
        correctAnswer: 'They ignore employee training',
        explanation: 'Without employee training, security is incomplete even with strong technical defenses.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'A power surge destroying servers is a violation of which CIA Triad principle?',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
        correctAnswer: 'Availability',
        explanation: 'Availability ensures that systems and data remain accessible; a power surge disrupts this.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Which type of attack is stealthy and harder to detect?',
        choices: ['Passive Attack', 'Active Attack', 'SQL Injection', 'DoS'],
        correctAnswer: 'Passive Attack',
        explanation: 'Passive attacks observe data without altering it, making them harder to detect.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Which type of attack alters or destroys data, threatening integrity?',
        choices: ['Passive Attack', 'Active Attack', 'Phishing', 'Eavesdropping'],
        correctAnswer: 'Active Attack',
        explanation: 'Active attacks compromise integrity by changing or destroying data.'
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'What vulnerability exists if encryption is used without multi-factor authentication (MFA)?',
        choices: ['Transparency issue', 'Weak hashing', 'Vulnerability under OWASP', 'Risk transference'],
        correctAnswer: 'Vulnerability under OWASP',
        explanation: 'Encryption alone is insufficient; lack of MFA is a listed vulnerability under OWASP.'
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'Which strategy best handles high-likelihood cyber risks?',
        choices: ['Acceptance', 'Mitigation', 'Transference', 'Avoidance'],
        correctAnswer: 'Mitigation',
        explanation: 'High-likelihood risks should be mitigated with security controls and defenses.'
      },

      // ============================
      // Cybercrime Laws & Regulations (Items 6–10)
      // ============================
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Under the Cybercrime Prevention Act (PH), which of the following is punishable?',
        choices: ['Pirated software sharing', 'Encryption use', 'Password reuse', 'System upgrades'],
        correctAnswer: 'Pirated software sharing',
        explanation: 'The Cybercrime Prevention Act punishes offenses like distributing pirated software.'
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'Collecting personal data without informing users violates which principle under the Data Privacy Act (PH, 2012)?',
        choices: ['Accountability', 'Transparency', 'Integrity', 'Confidentiality'],
        correctAnswer: 'Transparency',
        explanation: 'The Data Privacy Act requires transparency when collecting personal data.'
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'According to GDPR, what makes user consent invalid?',
        choices: ['Being specific and clear', 'Vague and unclear terms', 'Digital signatures', 'Encrypted storage'],
        correctAnswer: 'Vague and unclear terms',
        explanation: 'GDPR requires consent to be specific, clear, and unambiguous.'
      },
      {
        id: 10,
        type: 'multiple-choice',
        question: 'What is the focus of the Budapest Convention?',
        choices: ['Privacy rights', 'Cross-border cooperation in cybercrime', 'Encryption standards', 'Incident response'],
        correctAnswer: 'Cross-border cooperation in cybercrime',
        explanation: 'The Budapest Convention harmonizes laws and enables international cooperation against cybercrime.'
      },
      {
        id: 11,
        type: 'multiple-choice',
        question: 'When is a Data Protection Officer (DPO) required?',
        choices: ['When developing software', 'When handling sensitive data', 'When running a firewall', 'When outsourcing IT'],
        correctAnswer: 'When handling sensitive data',
        explanation: 'Organizations processing sensitive data must appoint a DPO to ensure accountability.'
      },

      // ============================
      // Intellectual Property & Licensing (Items 11–15)
      // ============================
      {
        id: 12,
        type: 'multiple-choice',
        question: 'Selling open-source software as proprietary without acknowledgment violates what?',
        choices: ['Copyright law', 'Trademark law', 'Licensing rules', 'GDPR'],
        correctAnswer: 'Licensing rules',
        explanation: 'Open-source misuse is a violation of licensing agreements.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        question: 'Which law protects logos?',
        choices: ['Copyright law', 'Trademark law', 'Patent law', 'GDPR'],
        correctAnswer: 'Trademark law',
        explanation: 'Logos are protected under trademark law.'
      },
      {
        id: 14,
        type: 'multiple-choice',
        question: 'Unauthorized distribution of music violates which law?',
        choices: ['Trademark', 'Copyright', 'Patent', 'Data Privacy'],
        correctAnswer: 'Copyright',
        explanation: 'Distributing music without authorization is a copyright violation.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'Installing one software license on 50 computers is a violation of what?',
        choices: ['Compliance rules', 'Software licensing', 'Trademark', 'Encryption policy'],
        correctAnswer: 'Software licensing',
        explanation: 'Using one license for multiple devices breaches licensing rules.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'What does DRM (Digital Rights Management) prevent?',
        choices: ['Phishing', 'Piracy', 'Viruses', 'Password theft'],
        correctAnswer: 'Piracy',
        explanation: 'DRM prevents piracy by protecting digital content from unauthorized use.'
      },

      // ============================
      // Ethics, Hacking & Security Practices (Items 16–20)
      // ============================
      {
        id: 17,
        type: 'multiple-choice',
        question: 'Hiring ethical hackers to test systems is an example of what?',
        choices: ['Malware defense', 'Preventive security measure', 'Incident response', 'Encryption'],
        correctAnswer: 'Preventive security measure',
        explanation: 'Ethical hacking identifies vulnerabilities before attackers can exploit them.'
      },
      {
        id: 18,
        type: 'multiple-choice',
        question: 'What does ignoring vulnerabilities usually represent?',
        choices: ['Good risk management', 'Unjustified risk acceptance', 'Proper mitigation', 'Fairness'],
        correctAnswer: 'Unjustified risk acceptance',
        explanation: 'Ignoring known vulnerabilities is an example of poor judgment in risk acceptance.'
      },
      {
        id: 19,
        type: 'multiple-choice',
        question: 'Publicly disclosing vulnerabilities without notice is called what?',
        choices: ['Full disclosure', 'Responsible disclosure', 'Confidential reporting', 'Patch management'],
        correctAnswer: 'Full disclosure',
        explanation: 'Full disclosure can harm organizations by giving attackers early knowledge.'
      },
      {
        id: 20,
        type: 'multiple-choice',
        question: 'What should organizations do with outdated systems?',
        choices: ['Keep them running', 'Upgrade immediately', 'Ignore them', 'Use default passwords'],
        correctAnswer: 'Upgrade immediately',
        explanation: 'Outdated systems must be upgraded immediately to reduce risks.'
      },
      {
        id: 21,
        type: 'multiple-choice',
        question: 'What is the ethical response to a data leakage?',
        choices: ['Ignore it', 'Notify affected users and regulators', 'Blame employees', 'Hide it from customers'],
        correctAnswer: 'Notify affected users and regulators',
        explanation: 'Transparency requires notifying affected users and regulators in case of a breach.'
      },

      // ============================
      // Professional Ethics & Standards (Items 21–25)
      // ============================
      {
        id: 22,
        type: 'multiple-choice',
        question: 'Leaking client information violates which CISSP Code of Ethics principle?',
        choices: ['Integrity', 'Confidentiality', 'Competence', 'Accountability'],
        correctAnswer: 'Confidentiality',
        explanation: 'Leaking information is a breach of confidentiality under CISSP ethics.'
      },
      {
        id: 23,
        type: 'multiple-choice',
        question: 'Falsifying audit reports violates which ISACA principle?',
        choices: ['Confidentiality', 'Integrity', 'Competence', 'Transparency'],
        correctAnswer: 'Integrity',
        explanation: 'Falsifying reports is an integrity violation in ISACA ethics.'
      },
      {
        id: 24,
        type: 'multiple-choice',
        question: 'Which ACM principle is violated if professionals lack necessary skills?',
        choices: ['Integrity', 'Competence', 'Confidentiality', 'Transparency'],
        correctAnswer: 'Competence',
        explanation: 'The ACM code stresses competence as a professional obligation.'
      },
      {
        id: 25,
        type: 'multiple-choice',
        question: 'What is the purpose of professional codes of ethics?',
        choices: ['Punishment for violations', 'Framework for ethical decision-making', 'Software licensing', 'Incident reporting'],
        correctAnswer: 'Framework for ethical decision-making',
        explanation: 'Codes of ethics are designed to guide professionals, not to punish them.'
      },
      {
        id: 26,
        type: 'multiple-choice',
        question: 'When is whistleblowing considered ethical?',
        choices: ['When exposing illegal practices for public good', 'When leaking for profit', 'When avoiding responsibility', 'When hiding vulnerabilities'],
        correctAnswer: 'When exposing illegal practices for public good',
        explanation: 'Whistleblowing is ethical if done to reveal wrongdoing for the greater public good.'
      },

      // ============================
      // Risk Management & Legal Compliance (Items 26–30)
      // ============================
      {
        id: 27,
        type: 'multiple-choice',
        question: 'Accepting vulnerabilities for cost savings is an example of what?',
        choices: ['Justified risk mitigation', 'Unjustified risk acceptance', 'Proper transference', 'Effective avoidance'],
        correctAnswer: 'Unjustified risk acceptance',
        explanation: 'Ignoring known risks for cost savings is considered unjustified risk acceptance.'
      },
      {
        id: 28,
        type: 'multiple-choice',
        question: 'Buying cyber insurance represents which risk strategy?',
        choices: ['Acceptance', 'Mitigation', 'Transference', 'Avoidance'],
        correctAnswer: 'Transference',
        explanation: 'Insurance shifts responsibility, which is risk transference.'
      },
      {
        id: 29,
        type: 'multiple-choice',
        question: 'Removing all internet access is an example of which risk strategy?',
        choices: ['Avoidance', 'Acceptance', 'Mitigation', 'Transference'],
        correctAnswer: 'Avoidance',
        explanation: 'Extreme risk avoidance involves removing exposure, such as cutting off internet access.'
      },
      {
        id: 30,
        type: 'multiple-choice',
        question: 'Which framework requires integrating risk management into system development?',
        choices: ['ISO 31000', 'NIST RMF', 'COBIT', 'PCI-DSS'],
        correctAnswer: 'NIST RMF',
        explanation: 'NIST RMF integrates risk management into system development and operation.'
      },
      {
        id: 31,
        type: 'multiple-choice',
        question: 'What is the fairness principle in AI and privacy about?',
        choices: ['Balancing user privacy and business goals', 'Encrypting all data', 'Using MFA only', 'Ignoring transparency'],
        correctAnswer: 'Balancing user privacy and business goals',
        explanation: 'Fairness and accountability require balancing privacy with organizational needs.'
      },
      {
        id: 32,
        type: "multiple-choice",
        question: "Risk management completely eliminates all risks.",
        choices: ["True", "False"],
        correctAnswer: "False",
        explanation: "Risk management identifies, assesses, and mitigates risks but does not eliminate all risks."
      },
      {
        id: 33,
        type: "multiple-choice",
        question: "RTO refers to recovery time, not data loss.",
        choices: ["True", "False"],
        correctAnswer: "True",
        explanation: "RTO measures how quickly systems must be restored; RPO measures data loss."
      },
      {
        id: 34,
        type: "multiple-choice",
        question: "A Disaster Recovery Plan (DRP) focuses on restoring IT systems and data.",
        choices: ["True", "False"],
        correctAnswer: "True",
        explanation: "DRP ensures IT infrastructure and data are recovered after a disruption."
      },
      {
        id: 35,
        type: "multiple-choice",
        question: "Role-Based Access Control (RBAC) follows the principle of least privilege.",
        choices: ["True", "False"],
        correctAnswer: "True",
        explanation: "RBAC grants access based on job roles, enforcing least privilege."
      },
      {
        id: 36,
        type: "multiple-choice",
        question: "Standards are optional guidelines and not enforceable.",
        choices: ["True", "False"],
        correctAnswer: "False",
        explanation: "Standards are measurable and enforceable rules that support security policy."
      },
      {
        id: 37,
        type: 'multiple-choice',
        question: 'CIA Triad stands for Confidentiality, Integrity, Accuracy.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The CIA Triad stands for Confidentiality, Integrity, and Availability, not Accuracy.'
      },
      {
        id: 38,
        type: 'multiple-choice',
        question: 'The Morris Worm incident highlighted an availability risk.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The Morris Worm disrupted system availability, showing the importance of resilience.'
      },
      {
        id: 39,
        type: 'multiple-choice',
        question: 'Security should be built-in after deployment.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Security must be integrated early in the SDLC, not added after deployment.'
      },
      {
        id: 40,
        type: 'multiple-choice',
        question: 'People can be both a component of security and a source of risk.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Employees are both essential for security and a potential risk factor.'
      },
      {
        id: 41,
        type: 'multiple-choice',
        question: 'Security and usability must be balanced.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Strong security should balance with user convenience for effectiveness.'
      },
      {
        id: 42,
        type: 'multiple-choice',
        question: 'The Disposal phase in SDLC has no security implications.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The Disposal phase carries risks if data is not securely destroyed.'
      },
      {
        id: 43,
        type: 'multiple-choice',
        question: 'Biometric login provides both strong security and usability.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Biometric login balances security with user convenience.'
      },
      {
        id: 44,
        type: 'multiple-choice',
        question: 'The CISO is responsible for coding applications.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The CISO provides strategic vision, not programming duties.'
      },
      {
        id: 45,
        type: 'multiple-choice',
        question: 'The Logical Design phase includes recovery policies and outsourcing analysis.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Logical Design considers recovery policies and outsourcing security analysis.'
      },
      {
        id: 46,
        type: 'multiple-choice',
        question: 'A disadvantage of SSDLC is limited adaptability.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'SSDLC increases security but is less adaptable and more time-consuming.'
      },
      {
        id: 47,
        type: 'multiple-choice',
        question: 'Security Analysts are primarily risk assessors and threat monitors.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Security Analysts focus on monitoring threats and assessing risks.'
      },
      {
        id: 48,
        type: 'multiple-choice',
        question: 'SSDLC provides improved security and better project management.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'SSDLC advantages include stronger security and improved project management.'
      },
      {
        id: 49,
        type: 'multiple-choice',
        question: 'Ignoring security warnings has little to no cost impact.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Ignoring warnings can cause severe costs and damages, as seen in real-world breaches.'
      },
      {
        id: 50,
        type: 'multiple-choice',
        question: 'Secure disposal helps prevent unauthorized access to sensitive data.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Proper disposal ensures sensitive data is unrecoverable.'
      },
      {
        id: 51,
        type: 'multiple-choice',
        question: 'Confidentiality in the CIA Triad means data accuracy.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Confidentiality is about restricting access to authorized users, not accuracy.'
      },
      {
        id: 52,
        type: 'multiple-choice',
        question: 'Ignoring security warnings results in high costs and damage.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The Target Breach and similar incidents show ignoring warnings leads to big financial and reputational losses.'
      },
      {
        id: 53,
        type: 'multiple-choice',
        question: 'Secure disposal prevents unauthorized access.',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Proper disposal protects data from being accessed after devices are discarded.'
      },
      {
        id: 54,
        type: 'multiple-choice',
        question: 'Confidentiality equals accuracy of data.',
        choices: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Confidentiality is about restricting access to authorized users, not ensuring accuracy.'
      },
      {
        id: 55,
        type: "short-answer",
        question: "The process of identifying, assessing, and mitigating risks to organizational assets is called ______.",
        correctAnswer: "Risk Management",
        explanation: "Risk Management focuses on managing risks to assets."
      },
      {
        id: 56,
        type: "short-answer",
        question: "A weakness exploitable by a threat is known as a ______.",
        correctAnswer: "Vulnerability",
        explanation: "A vulnerability is a weakness that can be exploited."
      },
      {
        ///////////////////
        /////////////////
        ////////////////////////
        /////////////////////////
        id: 57,
        type: "short-answer",
        question: "Risk assessment focuses on two main factors: ______ and ______.",
        correctAnswer: "Likelihood & Impact",
        explanation: "Risk assessment considers both likelihood and impact of threats."
      },
      {
        id: 58,
        type: "short-answer",
        question: "The risk mitigation strategy that transfers risk to a third party is called ______.",
        correctAnswer: "Insurance (Transfer)",
        explanation: "Insurance is a transfer strategy for managing risk."
      },
      {
        id: 59,
        type: "short-answer",
        question: "______ is broad and adaptable across industries, while ______ is U.S. federal government–focused and cybersecurity-centered.",
        correctAnswer: "ISO 31000 / NIST RMF",
        explanation: "ISO 31000 is broad; NIST RMF is government/cybersecurity-focused."
      },
      {
        id: 60,
        type: "short-answer",
        question: "______ ensures operations continue during disruptions, while ______ focuses on restoring IT systems and data.",
        correctAnswer: "BCP & DRP",
        explanation: "BCP covers organizational continuity; DRP restores IT/data."
      },
      {
        id: 61,
        type: "short-answer",
        question: "______ measures how quickly systems must be restored, while ______ defines the maximum acceptable data loss.",
        correctAnswer: "RTO / RPO",
        explanation: "RTO = time; RPO = data loss."
      },
      {
        id: 62,
        type: "short-answer",
        question: "Environmental controls like ______ help maintain safe operating conditions.",
        correctAnswer: "HVAC",
        explanation: "HVAC ensures proper environmental conditions for IT systems."
      },
      {
        id: 63,
        type: "short-answer",
        question: "Role-Based Access Control follows the principle of ______.",
        correctAnswer: "Least Privilege",
        explanation: "Least privilege means users only get the access they need."
      },
      {
        id: 64,
        type: "short-answer",
        question: "The CIA triad focuses on ______, ______, and integrity; while digital signatures provide ______.",
        correctAnswe: "Confidentiality / Integrity / Non-repudiation",
        explanation: "Confidentiality, integrity, and non-repudiation are key principles."
      },
      {
        id: 65,
        type: "short-answer",
        question: "A secure remote connection is created through a ______, while a ______ acts as a middleman to hide IP addresses, and ______ protect physical devices. Data can also be protected through ______.",
        correctAnswer: "VPN Tunnel / Proxy / Cable locks / Physical destruction",
        explanation: "VPNs secure traffic, proxies mask IPs, cable locks secure hardware, and physical destruction ensures data disposal."
      },
      {
        id: 66,
        type: "short-answer",
        question: "Encryption and authentication are supported by technologies such as ______ and ______.",
        correctAnswer: "PKI, SSL/TLS",
        explanation: "PKI and SSL/TLS provide secure communication and authentication."
      },
      {
        id: 67,
        type: 'short-answer',
        question: 'What does BCP stand for, and give one example?',
        correctAnswer: 'Business Continuity Plan – Example: A hospital using a backup generator during power outage.',
        explanation: 'BCP ensures organizational operations continue during disruptions, like hospitals running on backup generators.'
      },
      {
        id: 68,
        type: 'short-answer',
        question: 'What does DRP stand for, and give one example?',
        correctAnswer: 'Disaster Recovery Plan – Example: Restoring IT servers from backup after a cyberattack.',
        explanation: 'DRPs focus on restoring IT systems and data after disruptions.'
      },
      {
        id: 69,
        type: 'short-answer',
        question: 'What does RTO stand for, and give one example?',
        correctAnswer: 'Recovery Time Objective – Example: A company requiring email systems to be restored within 2 hours after outage.',
        explanation: 'RTO specifies how quickly systems must be restored after a disruption.'
      },
      {
        id: 70,
        type: 'short-answer',
        question: 'What does RPO stand for, and give one example?',
        correctAnswer: 'Recovery Point Objective – Example: Accepting up to 15 minutes of data loss in case of a system crash.',
        explanation: 'RPO defines the maximum acceptable data loss measured in time.'
      },
      {
        id: 71,
        type: 'short-answer',
        question: 'What does RBAC stand for, and give one example?',
        correctAnswer: 'Role-Based Access Control – Example: An HR employee can access employee records but not financial data.',
        explanation: 'RBAC grants access rights based on job roles and enforces least privilege.'
      },
      {
        id: 82,
        type: 'short-answer',
        question: 'What does IRP stand for, and give one example?',
        correctAnswer: 'Incident Response Plan – Example: A company simulating a phishing attack to test response readiness.',
        explanation: 'IRPs ensure detection, response, recovery, and readiness against incidents.'
      },
      {
        id: 73,
        type: 'short-answer',
        question: 'What does AES stand for, and give one example?',
        correctAnswer: 'Advanced Encryption Standard – Example: Encrypting Wi-Fi traffic to secure communications.',
        explanation: 'AES is a symmetric encryption standard used to protect data.'
      },
      {
        id: 74,
        type: 'short-answer',
        question: 'What does RSA stand for, and give one example?',
        correctAnswer: 'Rivest–Shamir–Adleman – Example: Securing online banking transactions with public/private keys.',
        explanation: 'RSA is an asymmetric encryption algorithm using public and private key pairs.'
      },
      {
        id: 75,
        type: 'short-answer',
        question: 'What does PKI stand for, and give one example?',
        correctAnswer: 'Public Key Infrastructure – Example: SSL/TLS certificates securing a website connection.',
        explanation: 'PKI uses digital certificates and public/private keys for secure communications.'
      },
      {
        id: 76,
        type: 'multiple-choice',
        question: 'Which historical incident highlighted the importance of availability in cybersecurity?',
        choices: ['Target Breach (2013)', 'Morris Worm (1988)', 'Equifax Breach (2017)', 'WannaCry (2017)'],
        correctAnswer: 'Morris Worm (1988)',
        explanation: 'The Morris Worm disrupted system availability, emphasizing the need for resilient systems.'
      },
      {
        id: 77,
        type: 'multiple-choice',
        question: 'In the CIA Triad, what does confidentiality ensure?',
        choices: ['Accuracy of information', 'Restricts access to authorized users', 'Keeps systems available at all times', 'Prevents all threats'],
        correctAnswer: 'Restricts access to authorized users',
        explanation: 'Confidentiality means information is only accessible to those with proper authorization.'
      },
      {
        id: 78,
        type: 'multiple-choice',
        question: 'Which of the following best represents balancing security and usability?',
        choices: ['Using complex passwords only', 'Biometric login', 'Granting admin access to everyone', 'No authentication required'],
        correctAnswer: 'Biometric login',
        explanation: 'Biometric login balances strong security with ease of use for users.'
      },
      {
        id: 79,
        type: 'multiple-choice',
        question: 'When should security be integrated in the System Development Life Cycle (SDLC)?',
        choices: ['After deployment', 'During testing only', 'Early in development', 'Never, it is separate from SDLC'],
        correctAnswer: 'Early in development',
        explanation: 'Integrating security early avoids costly redesigns and vulnerabilities.'
      },
      {
        id: 80,
        type: 'multiple-choice',
        question: 'In which SDLC phase is secure coding applied?',
        choices: ['Planning', 'Development', 'Testing', 'Disposal'],
        correctAnswer: 'Development',
        explanation: 'Secure coding practices are implemented during the Development phase.'
      },
      {
        id: 81,
        type: 'multiple-choice',
        question: 'Which SDLC phase has security risks due to improper data disposal?',
        choices: ['Logical Design', 'Implementation', 'Disposal', 'Testing'],
        correctAnswer: 'Disposal',
        explanation: 'The Disposal phase has risks if data is not securely destroyed.'
      },
      {
        id: 82,
        type: 'multiple-choice',
        question: 'In the Logical Design phase of SDLC, which policy is emphasized?',
        choices: ['Password complexity', 'Backup and recovery policies', 'Incident reporting', 'Encryption standards'],
        correctAnswer: 'Backup and recovery policies',
        explanation: 'The Logical Design phase should address backup and recovery planning.'
      },
      {
        id: 83,
        type: 'multiple-choice',
        question: 'Which principle describes building security from the beginning rather than patching later?',
        choices: ['Least Privilege', 'Defense in Depth', 'Security by Design', 'Risk Transfer'],
        correctAnswer: 'Security by Design',
        explanation: 'Security by Design emphasizes embedding security from the start.'
      },
      {
        id: 84,
        type: 'multiple-choice',
        question: 'Which of the following is an example of Security by Design?',
        choices: ['Default passwords', 'Least privilege access', 'Optional encryption', 'No access control'],
        correctAnswer: 'Least privilege access',
        explanation: 'Granting least privilege is a principle of Security by Design.'
      },
      {
        id: 85,
        type: 'multiple-choice',
        question: 'Which security role is responsible for strategic vision?',
        choices: ['Incident Responder', 'Security Engineer', 'CISO', 'Security Analyst'],
        correctAnswer: 'CISO',
        explanation: 'The Chief Information Security Officer sets the strategic vision for security.'
      },
      {
        id: 86,
        type: 'multiple-choice',
        question: 'Which role is focused on risk assessment and monitoring?',
        choices: ['CISO', 'Security Analyst', 'Incident Responder', 'Software Developer'],
        correctAnswer: 'Security Analyst',
        explanation: 'Security Analysts assess risks and monitor security threats.'
      },
      {
        id: 87,
        type: 'multiple-choice',
        question: 'What was the key lesson from the Target Breach of 2013?',
        choices: ['Use stronger encryption', 'Ignoring warnings leads to big losses', 'Always upgrade hardware', 'Passwords alone provide security'],
        correctAnswer: 'Ignoring warnings leads to big losses',
        explanation: 'The Target Breach showed the consequences of ignoring security alerts.'
      },
      {
        id: 88,
        type: 'multiple-choice',
        question: 'Which of the following is an advantage of Secure SDLC (SSDLC)?',
        choices: ['Improved security and compliance', 'Faster deployment', 'No need for monitoring', 'Easier disposal of data'],
        correctAnswer: 'Improved security and compliance',
        explanation: 'SSDLC improves security and facilitates compliance but requires more resources.'
      },
      {
        id: 89,
        type: 'multiple-choice',
        question: 'Which of the following is a disadvantage of Secure SDLC (SSDLC)?',
        choices: ['Improved security', 'Time-consuming and less adaptable', 'Better compliance', 'Faster design phase'],
        correctAnswer: 'Time-consuming and less adaptable',
        explanation: 'SSDLC requires more time and resources and may reduce adaptability.'
      },
      {
        id: 90,
        type: 'multiple-choice',
        question: 'Which practice protects details of daily business activities?',
        choices: ['Disaster Recovery', 'Operations Security', 'Risk Acceptance', 'Incident Response'],
        correctAnswer: 'Operations Security',
        explanation: 'Operations Security focuses on protecting details of day-to-day activities.'
      },
      {
        id: 91,
        type: 'multiple-choice',
        question: 'Which practice is vital for incident response and threat detection?',
        choices: ['Continuous Monitoring', 'Data Disposal', 'Whistleblowing', 'System Reboot'],
        correctAnswer: 'Continuous Monitoring',
        explanation: 'Continuous monitoring helps detect threats early and strengthens incident response.'
      },
      {
        id: 92,
        type: 'short-answer',
        question: 'What does the acronym CIA stand for in the CIA Triad?',
        correctAnswer: 'Confidentiality, Integrity, Availability',
        explanation: 'The CIA Triad represents the three foundational principles of information security.'
      },
      {
        id: 93,
        type: 'short-answer',
        question: 'What does SDLC stand for?',
        correctAnswer: 'System Development Life Cycle',
        explanation: 'SDLC is the process that outlines phases for developing and maintaining systems.'
      },
      {
        id: 94,
        type: 'short-answer',
        question: 'What does SecSDLC or SSDLC stand for?',
        correctAnswer: 'Security (Systems) Development Life Cycle',
        explanation: 'SecSDLC/SSDLC integrates security into every phase of the system development life cycle.'
      },
      {
        id: 95,
        type: 'short-answer',
        question: 'What does CISO stand for?',
        correctAnswer: 'Chief Information Security Officer',
        explanation: 'The CISO is responsible for providing strategic direction and oversight of organizational security.'
      },
      //////////////////////////////////////////
      {
        id: 96,
        type: "multiple-choice",
        question: "What is the process of identifying, assessing, and mitigating risks to organizational assets?",
        choices: ["Vulnerability Management", "Threat Analysis", "Risk Management", "Incident Response"],
        correctAnswer: "Risk Management",
        explanation: "Risk Management is the process of identifying, assessing, and mitigating risks to assets."
      },
      {
        id: 97,
        type: "multiple-choice",
        question: "Which of the following is considered an Asset?",
        choices: ["Phishing email", "Disgruntled employee", "Data, people, hardware", "Malware"],
        correctAnswer: "Data, people, hardware",
        explanation: "Assets are anything of value, such as data, people, and hardware."
      },
      {
        id: 98,
        type: "multiple-choice",
        question: "A potential danger to an asset is called a:",
        choices: ["Risk", "Threat", "Vulnerability", "Mitigation"],
        correctAnswer: "Threat",
        explanation: "A Threat is a potential danger to an asset."
      },
      {
        id: 99,
        type: "multiple-choice",
        question: "A weakness exploitable by a threat is called a:",
        choices: ["Asset", "Mitigation", "Vulnerability", "Risk"],
        correctAnswer: "Vulnerability",
        explanation: "A Vulnerability is a weakness that can be exploited by a threat."
      },
      {
        id: 100,
        type: "multiple-choice",
        question: "Risk Assessment primarily focuses on:",
        choices: ["Cost and efficiency", "Likelihood and impact", "Assets and threats", "Policies and standards"],
        correctAnswer: "Likelihood and impact",
        explanation: "Risk Assessment focuses on evaluating risks in terms of likelihood and impact."
      },
      {
        id: 101,
        type: "multiple-choice",
        question: "Which of the following is NOT a mitigation strategy?",
        choices: ["Avoidance", "Acceptance", "Transfer (insurance)", "Escalation"],
        correctAnswer: "Escalation",
        explanation: "Mitigation strategies include Avoidance, Acceptance, Transfer, and Mitigation. Escalation is not one."
      },
      {
        id: 102,
        type: "multiple-choice",
        question: "ISO 31000 is best described as:",
        choices: ["U.S. federal government–focused", "Broad and adaptable across industries", "Only for payment systems", "A technical encryption standard"],
        correctAnswer: "Broad and adaptable across industries",
        explanation: "ISO 31000 is broad and adaptable across industries."
      },
      {
        id: 103,
        type: "multiple-choice",
        question: "Which framework is U.S. federal government–focused and cybersecurity-centered?",
        choices: ["PCI-DSS", "COBIT", "NIST RMF", "ISO 31000"],
        correctAnswer: "NIST RMF",
        explanation: "NIST RMF is specific to U.S. government cybersecurity risk management."
      },
      {
        id: 104,
        type: "multiple-choice",
        question: "PCI-DSS and COBIT are examples of:",
        choices: ["Industry-specific frameworks", "Government standards", "Encryption methods", "Physical controls"],
        correctAnswer: "Industry-specific frameworks",
        explanation: "PCI-DSS and COBIT apply to specific industries."
      },
      {
        id: 105,
        type: "multiple-choice",
        question: "A Security Policy is defined as:",
        choices: ["Step-by-step instructions", "High-level goals", "Measurable rules", "Network firewall rules"],
        correctAnswer: "High-level goals",
        explanation: "Security Policy defines high-level security goals."
      },
      {
        id: 106,
        type: "multiple-choice",
        question: "Standards are best described as:",
        choices: ["Optional guidelines", "High-level goals", "Measurable, enforceable rules supporting policy", "Step-by-step procedures"],
        correctAnswer: "Measurable, enforceable rules supporting policy",
        explanation: "Standards are measurable and enforceable rules that support policies."
      },
      {
        id: 107,
        type: "multiple-choice",
        question: "Procedures are:",
        choices: ["High-level goals", "Industry standards", "Step-by-step instructions", "Risk assessments"],
        correctAnswer: "Step-by-step instructions",
        explanation: "Procedures provide step-by-step instructions to implement policies."
      },
      {
        id: 108,
        type: "multiple-choice",
        question: "Which plan ensures the entire organization continues operations during disruptions?",
        choices: ["Disaster Recovery Plan (DRP)", "Business Continuity Plan (BCP)", "Incident Response Plan (IRP)", "Risk Mitigation Plan"],
        correctAnswer: "Business Continuity Plan (BCP)",
        explanation: "BCP ensures the entire organization continues operating during disruptions."
      },
      {
        id: 109,
        type: "multiple-choice",
        question: "The Disaster Recovery Plan focuses on:",
        choices: ["Continuing all business operations", "Restoring IT infrastructure and data", "Training employees on phishing", "Documenting security policies"],
        correctAnswer: "Restoring IT infrastructure and data",
        explanation: "DRP specifically focuses on restoring IT systems and data."
      },
      {
        id: 110,
        type: "multiple-choice",
        question: "RTO (Recovery Time Objective) defines:",
        choices: ["Maximum acceptable data loss", "How quickly systems must be restored", "The likelihood of a threat", "Steps in risk assessment"],
        correctAnswer: "How quickly systems must be restored",
        explanation: "RTO measures the time within which systems must be restored."
      },
      {
        id: 111,
        type: "multiple-choice",
        question: "RPO (Recovery Point Objective) defines:",
        choices: ["Maximum acceptable data loss", "How quickly systems must be restored", "The impact of a risk", "Physical recovery procedures"],
        correctAnswer: "Maximum acceptable data loss",
        explanation: "RPO is the maximum acceptable data loss in case of disruption."
      },
      {
        id: 112,
        type: "multiple-choice",
        question: "Which of the following is an Environmental Control?",
        choices: ["Encryption", "HVAC", "Cable locks", "VPN"],
        correctAnswer: "HVAC",
        explanation: "Environmental controls include HVAC and fire suppression."
      },
      {
        id: 113,
        type: "multiple-choice",
        question: "Locks, guards, and cable locks are examples of:",
        choices: ["Technical controls", "Physical controls", "Environmental controls", "Network controls"],
        correctAnswer: "Physical controls",
        explanation: "Physical controls protect physical access, e.g., locks and guards."
      },
      {
        id: 114,
        type: "multiple-choice",
        question: "Encryption, firewalls, and VPNs are examples of:",
        choices: ["Environmental controls", "Technical controls", "Physical controls", "Procedures"],
        correctAnswer: "Technical controls",
        explanation: "Technical controls rely on technology such as encryption and VPNs."
      },
      {
        id: 115,
        type: "multiple-choice",
        question: "The Incident Response Plan (IRP) includes which of the following phases?",
        choices: ["Detect, Respond, Recover, Aftermath", "Identify, Transfer, Mitigate, Accept", "Plan, Build, Test, Deploy", "Policy, Standards, Procedures"],
        correctAnswer: "Detect, Respond, Recover, Aftermath",
        explanation: "IRP is a structured plan including Detect, Respond, Recover, and Aftermath."
      },
      {
        id: 116,
        type: "multiple-choice",
        question: "Incident Response is often compared to:",
        choices: ["Insurance policies", "Fire drills", "Data backup", "Business policy creation"],
        correctAnswer: "Fire drills",
        explanation: "IRP is compared to fire drills as both ensure readiness."
      },
      {
        id: 117,
        type: "multiple-choice",
        question: "RBAC grants access based on:",
        choices: ["User preferences", "Job role", "Encryption keys", "Data classification"],
        correctAnswer: "Job role",
        explanation: "Role-Based Access Control grants access based on job role."
      },
      {
        id: 118,
        type: "multiple-choice",
        question: "Which principle does RBAC follow?",
        choices: ["Least privilege", "Open access", "Multi-factor authentication", "Risk acceptance"],
        correctAnswer: "Least privilege",
        explanation: "RBAC follows the principle of least privilege."
      },
      {
        id: 119,
        type: "multiple-choice",
        question: "Disgruntled employees and careless mistakes are examples of:",
        choices: ["External threats", "Insider threats", "Technical risks", "Environmental risks"],
        correctAnswer: "Insider threats",
        explanation: "Insider threats come from employees and human errors."
      },
      {
        id: 120,
        type: "multiple-choice",
        question: "Which encryption method is symmetric and uses the same key?",
        choices: ["AES", "RSA", "Hashing", "Digital Signature"],
        correctAnswer: "AES",
        explanation: "AES is a symmetric encryption algorithm."
      },
      {
        id: 121,
        type: "multiple-choice",
        question: "Which encryption method is asymmetric and uses a public/private key pair?",
        choices: ["AES", "RSA", "Hash Functions", "VPN"],
        correctAnswer: "RSA",
        explanation: "RSA is asymmetric encryption using a key pair."
      },
      {
        id: 122,
        type: "multiple-choice",
        question: "Hash Functions are primarily used to ensure:",
        choices: ["Confidentiality", "Availability", "Integrity", "Non-repudiation"],
        correctAnswer: "Integrity",
        explanation: "Hash functions ensure data integrity."
      },
      {
        id: 123,
        type: "multiple-choice",
        question: "Digital Signatures ensure:",
        choices: ["Confidentiality", "Integrity", "Non-repudiation", "Availability"],
        correctAnswer: "Non-repudiation",
        explanation: "Digital signatures provide non-repudiation."
      },
      {
        id: 124,
        type: "multiple-choice",
        question: "Which technology encrypts traffic for employees working remotely?",
        choices: ["Firewall", "VPN", "Proxy Server", "Hash Function"],
        correctAnswer: "VPN",
        explanation: "A VPN encrypts traffic for remote access."
      },
      {
        id: 125,
        type: "multiple-choice",
        question: "Which firewall type acts as a middleman and hides IP addresses?",
        choices: ["Packet Filtering", "Stateful", "Proxy", "Next-Generation"],
        correctAnswer: "Proxy",
        explanation: "Proxy firewalls act as intermediaries and hide IP addresses."
      },
      {
        id: 126,
        type: 'multiple-choice',
        question: 'Which three principles make up the CIA Triad in information security?',
        choices: ['Confidentiality, Integrity, Accuracy', 'Confidentiality, Integrity, Availability', 'Confidentiality, Investigation, Access', 'Control, Integrity, Authentication'],
        correctAnswer: 'Confidentiality, Integrity, Availability',
        explanation: 'The CIA Triad stands for Confidentiality, Integrity, and Availability, the core foundations of information security.'
      },
      {
        id: 127,
        type: 'multiple-choice',
        question: 'Which historical cyber incident highlighted the importance of availability?',
        choices: ['Target Breach (2013)', 'Morris Worm (1988)', 'Equifax Breach (2017)', 'Stuxnet (2010)'],
        correctAnswer: 'Morris Worm (1988)',
        explanation: 'The Morris Worm disrupted availability, showing the importance of keeping systems accessible.'
      },
      {
        id: 128,
        type: 'multiple-choice',
        question: 'What was the key lesson from the Target Breach in 2013?',
        choices: ['Strong passwords are enough for security', 'Ignoring warnings can lead to major losses', 'Encryption is not necessary', 'Security should only focus on confidentiality'],
        correctAnswer: 'Ignoring warnings can lead to major losses',
        explanation: 'The Target breach showed that ignoring security alerts can result in massive financial and reputational damage.'
      },
      {
        id: 129,
        type: 'multiple-choice',
        question: 'Which of the following best represents balancing security and usability?',
        choices: ['Complex passwords only', 'Biometric login', 'No authentication required', 'Administrator access for all employees'],
        correctAnswer: 'Biometric login',
        explanation: 'Biometric login balances strong security with ease of use for users.'
      },
      {
        id: 130,
        type: 'multiple-choice',
        question: 'When should security be integrated in the System Development Life Cycle (SDLC)?',
        choices: ['After deployment', 'During testing only', 'Early in development (SecSDLC/SSDLC)', 'Never, security is separate from SDLC'],
        correctAnswer: 'Early in development (SecSDLC/SSDLC)',
        explanation: 'Integrating security early prevents costly redesigns and reduces vulnerabilities.'
      },
      {
        id: 131,
        type: 'multiple-choice',
        question: 'Which role in security is responsible for monitoring threats and performing risk assessments?',
        choices: ['Security Engineer', 'CISO', 'Security Analyst', 'Incident Responder'],
        correctAnswer: 'Security Analyst',
        explanation: 'Security Analysts focus on monitoring threats and assessing risks in the organization.'
      },
      {
        id: 132,
        type: 'multiple-choice',
        question: 'Which role in security provides strategic vision for organizational security?',
        choices: ['Incident Responder', 'Security Engineer', 'CISO', 'Security Analyst'],
        correctAnswer: 'CISO',
        explanation: 'The Chief Information Security Officer (CISO) sets the strategic vision for security.'
      },
      {
        id: 133,
        type: 'multiple-choice',
        question: 'Which security role is typically responsible for implementing and maintaining technical safeguards?',
        choices: ['Security Analyst', 'Security Engineer', 'Incident Responder', 'CISO'],
        correctAnswer: 'Security Engineer',
        explanation: 'Security Engineers focus on building and maintaining technical controls such as firewalls, VPNs, and encryption.'
      },
      {
        id: 134,
        type: 'multiple-choice',
        question: 'Which role is responsible for responding to security incidents and recovering systems?',
        choices: ['CISO', 'Incident Responder', 'Security Analyst', 'System Administrator'],
        correctAnswer: 'Incident Responder',
        explanation: 'Incident Responders handle active security incidents and work to recover systems and data.'
      },
      {
        id: 135,
        type: 'multiple-choice',
        question: 'What is the main benefit of integrating security early in the SDLC?',
        choices: ['Reduces cost of redesigns and vulnerabilities', 'Makes development slower', 'Focuses only on availability', 'Avoids training employees'],
        correctAnswer: 'Reduces cost of redesigns and vulnerabilities',
        explanation: 'Security by design helps prevent costly issues and vulnerabilities later in the development process.'
      },
      {
        id: 136,
        type: 'short-answer',
        question: 'What does CIA stand for in the CIA Triad?',
        correctAnswer: 'Confidentiality, Integrity, Availability',
        explanation: 'The CIA Triad represents the three foundational principles of information security.'
      },
      {
        id: 137,
        type: 'short-answer',
        question: 'What does OWASP stand for?',
        correctAnswer: 'Open Web Application Security Project',
        explanation: 'OWASP is a nonprofit project focused on improving the security of software and web applications.'
      },
      {
        id: 138,
        type: 'short-answer',
        question: 'What does DRM stand for?',
        correctAnswer: 'Digital Rights Management',
        explanation: 'DRM is a technology used to prevent piracy and unauthorized use of digital content.'
      },
      {
        id: 139,
        type: 'short-answer',
        question: 'What does DPO stand for in data privacy?',
        correctAnswer: 'Data Protection Officer',
        explanation: 'A DPO is responsible for overseeing data protection strategy and compliance in organizations.'
      },
      {
        id: 140,
        type: 'short-answer',
        question: 'What does NIST RMF stand for?',
        correctAnswer: 'Risk Management Framework',
        explanation: 'NIST RMF provides guidelines for integrating risk management into system development and operation.'
      },
      {
        id: 141,
        type: 'short-answer',
        question: 'What does whistleblowing mean in professional ethics?',
        correctAnswer: 'Reporting wrongdoing for public good',
        explanation: 'Whistleblowing refers to exposing illegal or unethical practices for the benefit of society.'
      },
      {
        id: 142,
        type: 'multiple-choice',
        question: 'Which security principle did the Morris Worm (1988) incident primarily affect?',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
        correctAnswer: 'Availability',
        explanation: 'The Morris Worm caused widespread system outages, highlighting availability risks.'
      },
      {
        id: 143,
        type: 'multiple-choice',
        question: 'What was the major lesson learned from the Target Breach (2013)?',
        choices: ['Encryption is unnecessary', 'Ignoring security warnings leads to huge losses', 'Passwords alone are enough', 'Security does not apply to retail'],
        correctAnswer: 'Ignoring security warnings leads to huge losses',
        explanation: 'Target ignored alerts from security tools, resulting in massive losses.'
      },
      {
        id: 144,
        type: 'multiple-choice',
        question: 'Biometric login is an example of what principle in cybersecurity?',
        choices: ['Least privilege', 'Balancing security and usability', 'Risk acceptance', 'Confidentiality only'],
        correctAnswer: 'Balancing security and usability',
        explanation: 'Biometrics provide both strong security and user convenience.'
      },
      {
        id: 145,
        type: 'multiple-choice',
        question: 'Which is a major advantage of SSDLC?',
        choices: ['Improved security and compliance', 'Faster development cycles', 'Lower costs', 'More flexibility'],
        correctAnswer: 'Improved security and compliance',
        explanation: 'SSDLC integrates security early, reducing vulnerabilities and improving compliance.'
      },
      {
        id: 146,
        type: 'multiple-choice',
        question: 'Which is a disadvantage of SSDLC?',
        choices: ['Better compliance', 'Time-consuming and less adaptable', 'Improved project management', 'Higher security'],
        correctAnswer: 'Time-consuming and less adaptable',
        explanation: 'SSDLC is secure but requires more time and effort, reducing adaptability.'
      },
      {
        id: 147,
        type: 'multiple-choice',
        question: 'Who provides strategic vision in security leadership?',
        choices: ['Security Analyst', 'CISO', 'Security Engineer', 'Incident Responder'],
        correctAnswer: 'CISO',
        explanation: 'The Chief Information Security Officer provides strategic leadership for security.'
      },
      {
        id: 148,
        type: 'multiple-choice',
        question: 'Which role focuses on monitoring threats and assessing risks?',
        choices: ['CISO', 'Security Analyst', 'Security Engineer', 'IT Manager'],
        correctAnswer: 'Security Analyst',
        explanation: 'Analysts monitor threats, conduct assessments, and provide insights for mitigation.'
      },
      {
        id: 149,
        type: 'multiple-choice',
        question: 'Which role is primarily technical, implementing firewalls and safeguards?',
        choices: ['CISO', 'Security Engineer', 'Risk Officer', 'Security Analyst'],
        correctAnswer: 'Security Engineer',
        explanation: 'Security Engineers handle technical aspects of cybersecurity defense.'
      },
      {
        id: 150,
        type: 'multiple-choice',
        question: 'Which CIA Triad principle is violated when unauthorized users access personal data?',
        choices: ['Confidentiality', 'Integrity', 'Availability', 'Accountability'],
        correctAnswer: 'Confidentiality',
        explanation: 'Confidentiality ensures only authorized access to sensitive data.'
      },
      {
        id: 151,
        type: 'multiple-choice',
        question: 'Which law in the Philippines criminalizes piracy and software-related offenses?',
        choices: ['Data Privacy Act', 'Cybercrime Prevention Act', 'GDPR', 'Budapest Convention'],
        correctAnswer: 'Cybercrime Prevention Act',
        explanation: 'The Cybercrime Prevention Act punishes piracy and other computer-related crimes.'
      },
      {
        id: 152,
        type: 'multiple-choice',
        question: 'Collecting personal data without informing users violates which law?',
        choices: ['Data Privacy Act (PH)', 'Cybercrime Prevention Act', 'GDPR', 'Trademark Law'],
        correctAnswer: 'Data Privacy Act (PH)',
        explanation: 'The Data Privacy Act ensures transparency when handling personal data.'
      },
      {
        id: 153,
        type: 'multiple-choice',
        question: 'According to GDPR, what makes user consent invalid?',
        choices: ['Clear and specific terms', 'Vague or ambiguous terms', 'Digital signatures', 'Encryption'],
        correctAnswer: 'Vague or ambiguous terms',
        explanation: 'GDPR requires consent to be explicit, specific, and unambiguous.'
      },
      {
        id: 154,
        type: 'multiple-choice',
        question: 'Buying cyber insurance is an example of which risk strategy?',
        choices: ['Acceptance', 'Transference', 'Mitigation', 'Avoidance'],
        correctAnswer: 'Transference',
        explanation: 'Insurance transfers financial risk to a third party.'
      },
      {
        id: 155,
        type: 'multiple-choice',
        question: 'Leaking client data violates which ethical principle?',
        choices: ['Competence', 'Confidentiality', 'Integrity', 'Accountability'],
        correctAnswer: 'Confidentiality',
        explanation: 'Confidentiality is breached when client data is disclosed without consent.'
      },
      {
        id: 156,
        type: 'multiple-choice',
        question: 'Which technology is used to protect intellectual property and prevent piracy?',
        choices: ['MFA', 'SSL', 'DRM', 'VPN'],
        correctAnswer: 'DRM',
        explanation: 'Digital Rights Management (DRM) protects digital content from unauthorized use.'
      }
    ]
  }
];
  
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

