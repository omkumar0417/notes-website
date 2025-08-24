export default function handler(req, res) {
  const publicNotes = {
   "Operating Systems (College)": {
     "Syllabus": `
You can view the complete Operating System syllabus PDF directly below:
<div class="pdf-container">
  <object data="pdfs/os_syllabus.pdf#toolbar=0&navpanes=0" 
          type="application/pdf" 
          class="pdf-frame">
    <div class="pdf-fallback">
      <p>Your browser doesn’t support inline PDFs.</p>
      <a href="pdfs/os_syllabus.pdf" target="_blank">Click here to view the PDF</a>
    </div>
  </object>
</div>
<br>
<p>
  This syllabus covers all the essential topics and modules required for your Java course or exam preparation. 
  Please refer to the PDF for a detailed breakdown of chapters, units, and learning objectives.
</p>
`,
  "Unit 1: Introduction, OS Structure and Services": `
<strong>Overview:</strong><br>
An Operating System (OS) is system software that manages hardware resources and provides services for application programs and users.<br>
<strong>Objectives:</strong> convenience, efficiency (resource utilization), and ability to evolve.<br><br>

<strong>Computer-System Organization:</strong><br>
• Components: CPU, main memory, I/O devices, device controllers, system bus.<br>
• DMA (Direct Memory Access): device transfers blocks directly to memory, reducing CPU overhead.<br>
• Storage hierarchy: registers → cache → main memory → secondary storage → tertiary storage (decreasing speed, increasing capacity).<br><br>

<strong>Computer-System Architecture:</strong><br>
• Single-processor vs multi-processor (symmetric multiprocessing, NUMA).<br>
• Multicore CPUs & hardware threads (SMT/Hyper-Threading).<br>
• Clustered systems: loosely coupled computers working together.<br>
• Modes: user mode and kernel mode (privileged instructions only in kernel).<br><br>

<strong>Operating-System Structure & Operations:</strong><br>
• Monolithic kernel (Unix), Microkernel (minimal kernel + services in user space), Modular kernels, Layered design, Hybrid (Windows, modern Linux with modules).<br>
• OS operations are event-driven: interrupts (from hardware) and traps/exceptions (from software).<br>
• Context switch: save PCB of running process and load PCB of next process.<br>
• Boot sequence: firmware (BIOS/UEFI) → bootloader (e.g., GRUB) → kernel load → init/systemd starts services.<br><br>

<strong>OS Services (for users/programs):</strong><br>
• Program execution, I/O operations, File-system manipulation, Interprocess communication (IPC), Error detection, Resource allocation, Accounting, Protection and Security, Networking, UI (CLI/GUI).<br><br>

<strong>User and OS Interface:</strong><br>
• CLI (shell: bash, zsh, PowerShell), GUI (Windows, GNOME, KDE), Touch/Voice UIs.<br>
• Command interpreter parses commands and invokes system calls or utilities.<br><br>

<strong>System Calls (types & examples):</strong><br>
• Process control (fork, exec, exit, wait).<br>
• File management (open, read, write, lseek, close).<br>
• Device management (ioctl, read/write on device files).<br>
• Information maintenance (getpid, time, uname).<br>
• Communications (pipe, socket, send/recv, shmget/shmat).<br>
• Protection (chmod, chown, setuid).<br><br>

<strong>System Programs:</strong><br>
Compilers, linkers, loaders, assemblers, text editors, shells, daemons, network tools, file utilities.<br><br>

<strong>Kernel Data Structures:</strong><br>
• Process: PCB (PID, state, registers, PC, memory pointers, open files, accounting).<br>
• Memory: page tables, frame table, free lists, TLB entries.<br>
• File system: open file table, inodes/FCBs, directory entries.<br>
• I/O: device-status tables, buffer caches, request queues.<br><br>

<strong>Computing Environments:</strong><br>
Traditional desktops/servers, Mobile/Embedded/IoT, Client–Server and P2P, Virtualization (type-1/type-2 hypervisors), Cloud (IaaS/PaaS/SaaS), Real-time systems (hard vs soft).<br><br>

<strong>Open-Source Operating Systems:</strong><br>
Linux (kernel + GNU userland), BSD family (FreeBSD, OpenBSD, NetBSD), Android (Linux kernel + ART runtime).<br><br>

<strong>OS Design & Implementation:</strong><br>
Policy (what) vs Mechanism (how). Portability (C/C++), performance (kernel space), reliability and security.<br>
Debugging: logging, tracing, core dumps, kernel debuggers (kgdb), performance profiling (perf, ftrace).<br>
Generation: configuring/building kernel, tailoring to hardware (drivers, modules).<br>
`,

  "Unit 2: Process Management and Synchronization": `
Process Concept
- Process = program in execution + current state. Contains code, data, heap, stack, and context.
- States: new, ready, running, waiting/blocked, terminated. Ready queue, device queues.
- PCB fields: PID, state, registers, PC, scheduling info (priority), memory pointers, open files, accounting.

Operations on Processes
- Creation (fork/exec in Unix, CreateProcess in Windows), termination (exit, abort), parent–child relationships, zombies/orphans.
- Context Switch: save running process context, load next process context; adds overhead (no useful work).

Interprocess Communication (IPC)
- Shared memory: fast, requires synchronization (mutex/semaphore). Steps: create, attach, synchronize, detach.
- Message passing: send/receive with either direct or indirect addressing (mailboxes/ports). Modes: blocking vs non-blocking.
- Pipes: anonymous (parent–child), named FIFOs, sockets (TCP/UDP) for client–server across networks.
- Remote Procedure Call (RPC) abstracts message passing as function calls; uses stubs and XDR.

Threads
- Thread = lightweight process; shares code/data/files but has its own registers and stack.
- Benefits: responsiveness, resource sharing, economy, scalability on multicore.
- User-level vs Kernel-level threads; Models: many-to-one, one-to-one, many-to-many.
- Multicore programming issues: concurrency, data races, cache affinity, false sharing.

Thread Libraries & Implicit Threading
- POSIX Pthreads (pthread_create/join/mutex/cond), Win32 threads, Java threads.
- Implicit threading: thread pools, fork–join, work stealing, OpenMP pragmas, GCD/dispatch queues.

Process Synchronization (Critical Section)
- Requirements: Mutual exclusion, Progress, Bounded waiting.
- Software solution (2-process): Peterson’s algorithm using \`flag[i]\` and \`turn\`.
- Hardware support: atomic instructions (test-and-set, compare-and-swap), memory barriers, disabling interrupts (uniprocessor only).

Synchronization Primitives
- Mutex locks: acquire/release (spinlock vs blocking).
- Semaphores: counting/binary. 'wait(P)' decrements (blocks if negative), 'signal(V)' increments (wakes one).
- Condition variables (with monitors): \`wait\`, \`signal\`, \`broadcast\` under a monitor lock.

Classic Problems & Canonical Solutions
- Bounded Buffer (Producer–Consumer): use a mutex + two semaphores 'empty' and 'full'.
- Readers–Writers: prefer readers/writers with semaphores or monitor to avoid starvation.
- Dining Philosophers: avoid deadlock via resource hierarchy, at most 4 philosophers, or use a waiter (monitor).

Monitors
- High-level construct: shared data + procedures + synchronization (condition variables). Compiler enforces mutual exclusion.`,

  "Unit 3: CPU Scheduling and Deadlocks": `
CPU Scheduling Goals & Metrics
- Goals: maximize CPU utilization & throughput, minimize turnaround, waiting, and response times, ensure fairness.
- Metrics:
  Turnaround = completion − arrival;
  Waiting = turnaround − CPU burst;
  Response = first-run − arrival.

Uniprocessor Scheduling Algorithms
- FCFS: simple queue; convoy effect; non-preemptive.
- SJF/SRTF: shortest (remaining) time first; optimal average waiting; requires burst prediction (exponential averaging).
- Priority: preemptive/non-preemptive; needs aging to prevent starvation.
- Round Robin (RR): time quantum q; good for time-sharing; small q → high overhead, large q → FCFS.
- Multilevel Queue (MLQ): separate queues (system, interactive, batch) with fixed priorities.
- Multilevel Feedback Queue (MLFQ): processes move between queues based on behavior; balances responsiveness vs throughput.

Multiprocessor & Multicore Scheduling
- Load balancing (push/pull), processor affinity (soft/hard), gang scheduling for related threads.

Real-Time Scheduling
- Hard vs Soft RT; periodic tasks (C, T, D).
- Fixed priority (Rate Monotonic—RM) schedulability test Σ(Ci/Ti) ≤ n(2^{1/n}-1).
- Dynamic priority (Earliest Deadline First—EDF) is optimal on single CPU if Σ(Ci/Ti) ≤ 1.

Thread Scheduling
- User-level libraries may schedule runnable user threads on kernel threads; preemption depends on kernel support.

Deadlocks: Concepts & Handling
- System model: resources of multiple types; each resource type has instances.
- Necessary conditions (Coffman): Mutual exclusion, Hold and wait, No preemption, Circular wait.
- Resource-Allocation Graph (RAG): edges request/assignment; cycle ⇒ possible deadlock (certain if single instance per type).

Prevention (break a necessary condition)
- Mutual exclusion: make some resources sharable (not always possible).
- Hold-and-wait: require request-all-at-once or release before requesting (low utilization).
- No preemption: preempt resources if new request denied (works for CPU/memory).
- Circular wait: impose a strict resource ordering and request resources in increasing order.

Avoidance (ensure safe state)
- Safe sequence exists if every process can finish with available + currently held by completed processes.
- Banker’s algorithm: need, allocation, available matrices; grant request only if system remains safe.

Detection & Recovery
- Detection: 
  - Single instance per type ⇒ wait-for graph cycle detection.
  - Multiple instances ⇒ reduction algorithm using Need/Allocation/Available (like Banker without safety check).
- Recovery: preemption (save/restore state), rollback (for transactions), or process termination (victim selection based on cost).`,

  "Unit 4: Memory and Storage Management": `
Address Spaces & Binding
- Logical (virtual) vs physical addresses; binding can occur at compile time, load time, or run time (with MMU).
- Protection via base & limit registers (relocation), memory protection bits, and privilege levels.

Main Memory Management
- Swapping: move entire process to/from backing store; context-switch overhead; rarely used today for whole processes.
- Contiguous allocation: fixed or variable partitions; internal vs external fragmentation; placement strategies (first-fit, best-fit, worst-fit); compaction to reduce external fragmentation.

Segmentation
- Program divided into variable-sized segments (code, data, stack); logical address = ⟨segment#, offset⟩; segment table holds base, limit, and protection bits; supports sharing and protection per segment.

Paging
- Divide memory into fixed-size frames; process address space into pages; logical address = ⟨page#, offset⟩.
- Page table translates page# to frame#; protection/dirty/reference bits per entry.
- TLB (associative cache for page table entries): 
  Effective Memory Access Time (EMAT) ≈ (HitRatio × TLBhit) + (MissRatio × (TLBmiss + memory × page-table-lookups)).
- Page table organizations: hierarchical (multilevel), hashed (for large address spaces), inverted page table (one entry per frame).

Virtual Memory
- Demand paging: load pages on first use; page-fault handling steps: trap → OS checks legality → find free frame (or replace) → read from backing store → update tables → restart instruction.
- Copy-on-Write (COW): fork shares pages as read-only; copy created on write.
- Page Replacement Algorithms:
  - FIFO (may show Belady’s anomaly), Optimal (MIN) theoretical baseline, LRU (approximate with reference bits), Second-Chance/Clock, LFU/MFU (rarely used).
- Frame Allocation: equal, proportional, priority-based; global vs local replacement; working-set model (Δ window) and Page-Fault Frequency (PFF) to control thrashing.
- Thrashing: high page-fault rate; fix by increasing frames or reducing multiprogramming level.

Kernel Memory Allocation
- Buddy system for variable-size blocks; Slab allocator for objects (caches of inodes, task_struct, etc.).

File-System Interface
- File attributes: name, type, location, size, protection, timestamps.
- Operations: create, open, close, read, write, seek, truncate, delete, append, rename.
- Access methods: sequential and direct (random); indexed access via file structures (e.g., FAT index, Unix i-nodes).
- Directory structures: single-level, two-level, tree-structured, acyclic graph (for shared files), general graph (requires cycle detection/garbage collection).
- Mounting: attach a new FS to a mount point; unmount to detach.
- File sharing: user groups, access-control lists (ACLs), advisory/mandatory locking; consistency semantics (Unix vs session semantics).

File-System Implementation (core ideas)
- Allocation: contiguous (fast, suffers external fragmentation), linked (no external fragmentation, poor random access), indexed (FAT table, Unix i-node with direct/indirect/double-indirect pointers).
- Free-space management: bitmaps, free lists, grouping, counting.
- Caching: buffer cache/page cache; write-through vs write-back; journaling (ext4, NTFS) to maintain metadata consistency.

Secondary Storage & I/O
- Disk structure: platters, tracks, sectors, cylinders; SSDs have no seek/rotational delays but wear-leveling.
- Disk scheduling (for HDDs): FCFS, SSTF, SCAN (elevator), C-SCAN, LOOK, C-LOOK; goal is to minimize seek time.
- Disk management: low-level formatting, partitioning (MBR/GPT), logical formatting (file-system creation), bad-block mapping.
- Swap-space management: dedicated partition or file; tradeoffs in speed and flexibility.

RAID (Redundant Arrays of Inexpensive/Independent Disks)
- RAID 0: striping (speed, no redundancy).
- RAID 1: mirroring (high reliability, 50% capacity).
- RAID 5: block-level striping with distributed parity (balanced performance/reliability).
- RAID 6: double parity; RAID 10: striped mirrors (1+0).`,

  "Unit 5: Protection and Security": `
Protection vs Security
- Protection: internal OS mechanisms that control access to resources.
- Security: defense against external/internal threats to confidentiality, integrity, availability (CIA triad).

Goals & Principles of Protection
- Goals: controlled resource use, isolation, sharing with safety, auditing.
- Saltzer–Schroeder principles: least privilege, fail-safe defaults, economy of mechanism, complete mediation, open design, separation of privilege, least common mechanism, psychological acceptability.

Domain of Protection & Access Matrix
- Domain = set of (object, rights) pairs accessible to a subject (user/process).
- Access matrix M[subject, object] = rights (read, write, execute, append, own).
- Implementations:
  - ACLs (per object list of subjects→rights): easy to check object access.
  - Capabilities (per subject list of tokens): easy to pass rights; capabilities are unforgeable.
- Role-Based Access Control (RBAC): permissions grouped by role; users assigned roles.
- Revocation: immediate vs lazy, partial vs total, temporary vs permanent; capability revocation via indirection (capability lists reference keys).

Language-Based Protection
- Type-safe languages (Java, C#), bytecode verification, sandboxing, memory safety; compiler-enforced safety and runtime checks.

Security Threats
- Program threats: Trojan horse, trapdoor/backdoor, logic bomb, viruses (need host), worms (self-propagating), spyware, ransomware, buffer overflow/stack smashing, integer overflow, format-string bugs.
- System & network threats: password cracking, privilege escalation, sniffing, spoofing, replay, man-in-the-middle (MITM), session hijacking, port scanning, Denial of Service (DoS/DDoS), ARP/DNS poisoning.

Cryptography Basics
- Symmetric (shared key): AES. Fast; key distribution problem.
- Asymmetric (public/private key): RSA, ECC. Enables key exchange, digital signatures.
- Hash functions: SHA-256; properties—preimage resistance, collision resistance.
- Digital signatures: sign with private key; verify with public key; PKI and certificates (X.509).
- Secure channels: TLS/SSL handshakes, certificates, session keys.

Authentication & Authorization
- Factors: knowledge (password/PIN), possession (token/OTP), inherence (biometrics).
- Password hygiene: hashing with salt and strong KDF (bcrypt, scrypt, Argon2), account lockouts, MFA.
- Kerberos basics: tickets and authenticators via trusted Key Distribution Center (KDC).
- Single sign-on (SSO), OAuth2/OpenID Connect (web auth flows).

Security Defenses
- Hardening: patch management, minimal services, least-privilege accounts, secure defaults.
- Isolation: virtualization, containers, chroot jails, sandboxing.
- Monitoring: logging, auditing, SIEM, secure time sync.
- Network defenses: firewalls (packet filter, stateful inspection, application proxy, next-gen), NAT, DMZs, IDS/IPS (signature vs anomaly), VPNs.
- Data protection: encryption at rest/in transit, backups (3–2–1 rule), key management (HSMs), DLP.
- Incident response: detect, contain, eradicate, recover; forensics basics.

Security Classifications & Models
- Discretionary Access Control (DAC), Mandatory Access Control (MAC), RBAC.
- Bell–LaPadula (confidentiality: no read up, no write down) and Biba (integrity: no read down, no write up) models.`,

 
"Question bank":`
You can view the Operating System question bank PDF directly below:
<div class="pdf-container">
  <object data="pdfs/os_bank.pdf#toolbar=0&navpanes=0" 
          type="application/pdf" 
          class="pdf-frame">
    <div class="pdf-fallback">
      <p>Your browser doesn’t support inline PDFs.</p>
      <a href="pdfs/os_bank.pdf" target="_blank">Click here to view the PDF</a>
    </div>
  </object>
</div>
<br>
<div class="pdf-container" style="
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  height: 400px;
">
  <iframe src="/txts/hello.txt" style="
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    color: #ffffff;
    font-family: monospace;
    font-size: 16px;
  "></iframe>
</div>










<br>
<p>
If 2there is any problem while opening the PDF, you can also open it through this – 
<a href="pdfs/os_bank.pdf" target="_blank" style="color: #1E90FF; text-decoration: underline;">
Click here to view the PDF
</a><br>
  This covers all the essential topics and modules required for your os course or exam preparation. 
  Please refer to the PDF for a detailed breakdown of chapters, units, and learning objectives.
</p>
`,
  "Important Questions unitwise": `
Unit 1
1) Explain kernel vs shell, user vs kernel mode with examples. 
2) Describe OS services and illustrate with real system calls. 
3) Compare monolithic, microkernel, layered, and modular designs. 
4) Explain the boot process (UEFI/BIOS → bootloader → kernel → init).

Unit 2
1) Draw and explain process state diagram; list PCB fields. 
2) Implement producer–consumer using semaphores (code). 
3) Explain Peterson’s solution and its assumptions; why it fails on modern hardware without memory fences. 
4) Compare user-level and kernel-level threads; many-to-one vs one-to-one vs many-to-many. 
5) Describe IPC mechanisms (pipes, shared memory, sockets, RPC) with use-cases.

Unit 3
1) Solve scheduling problems for FCFS, SJF/SRTF, Priority, RR (calculate waiting/turnaround/respond times). 
2) Explain MLFQ: rules, starvation prevention, and tuning. 
3) Define deadlock. Prove the four necessary conditions and show how to break each. 
4) Banker's algorithm: check system safety and process request (numerical). 
5) Deadlock detection for multiple instances (work/finish algorithm) with example.

Unit 4
1) Paging vs segmentation: structure, advantages, and combined systems (segmented paging). 
2) Compute EMAT with given TLB hit ratio and memory times. 
3) Page replacement: show faults for a reference string under FIFO, OPT, LRU, Second-Chance. 
4) Explain thrashing and working-set/PFF strategies. 
5) Disk scheduling: trace head movement for FCFS/SSTF/SCAN/C-SCAN. 
6) Inode layout: direct/indirect pointers; compute max file size. 
7) Compare file allocation methods (contiguous, linked, indexed) with pros/cons.

Unit 5
1) Construct an access matrix for a scenario and show ACL vs capability implementations. 
2) Explain RBAC and revocation strategies with examples. 
3) Differentiate DAC, MAC, and RBAC; relate to Bell–LaPadula/Biba. 
4) Describe TLS handshake, certificates, and how confidentiality/integrity/authentication are achieved. 
5) Explain password storage best practices (salting + slow hashes). 
6) DoS vs DDoS: detection and mitigation techniques (rate limiting, scrubbing, anycast).
`
   },
    "Mathematics III (College)": {
      "Unit 1: Laplace Transforms": "Introduction to Laplace transforms, properties, and applications in engineering problems.",
      "Unit 2: Fourier Series and Transforms": "Covers Fourier series, integrals, and transforms with engineering applications.",
      "Unit 3: Partial Differential Equations": "Formation, solutions, and applications of partial differential equations.",
      "Unit 4: Complex Analysis": "Analytic functions, Cauchy-Riemann equations, contour integration, and residue theorem.",
      "Unit 5: Probability and Statistics": "Probability distributions, mean, variance, hypothesis testing, and statistical methods.",
      "Syllabus": "Detailed syllabus for Mathematics III including all units and reference books.",
      "Formula Sheet": "A comprehensive formula sheet for quick revision and exam preparation."
    },
    "Computer Organization & Architecture (College)": {
      "Unit 1: Basic Computer Organization": "Covers computer components, instruction cycles, and basic architecture.",
      "Unit 2: Microprogrammed Control": "Microinstructions, control memory, and microprogramming concepts.",
      "Unit 3: Central Processing Unit": "CPU organization, instruction formats, addressing modes, and ALU design.",
      "Unit 4: Memory Organization": "Memory hierarchy, cache, RAM, ROM, and associative memory.",
      "Unit 5: Input/Output Organization": "I/O interfaces, data transfer methods, interrupts, and DMA.",
      "Syllabus": "Complete syllabus for COA with unit-wise breakdown and recommended readings.",
      "Viva Questions": "Common viva and oral exam questions for COA practicals and theory."
    },
    "Data Structures & Algorithms (College)": {
      "Unit 1: Introduction to Data Structures": "Overview of data structures, types, and algorithm analysis.",
      "Unit 2: Linear Data Structures": "Arrays, linked lists, stacks, and queues with operations and applications.",
      "Unit 3: Non-Linear Data Structures": "Trees, binary trees, BST, AVL trees, and graph representations.",
      "Unit 4: Sorting and Searching Algorithms": "Bubble, selection, insertion, merge, quick sort, and search algorithms.",
      "Unit 5: Hashing and Advanced Topics": "Hash tables, collision resolution, and introduction to advanced data structures.",
      "Syllabus": "Unit-wise syllabus for DSA, including practical and theoretical components.",
      "Interview Preparation": "Key DSA questions and problems commonly asked in technical interviews."
    },
    "Advanced Programming Practice (College)": {
      "Unit 1: Advanced C Programming": "Pointers, dynamic memory, file handling, and modular programming in C.",
      "Unit 2: Object-Oriented Programming": "OOP concepts, classes, objects, inheritance, and polymorphism in C++/Java.",
      "Unit 3: Data Structures Implementation": "Implementing stacks, queues, trees, and graphs in code.",
      "Unit 4: Algorithms and Complexity": "Algorithm design, complexity analysis, and optimization techniques.",
      "Unit 5: Real-World Projects": "Building mini-projects and applications using advanced programming concepts.",
      "Syllabus": "Comprehensive syllabus for Advanced Programming Practice with project guidelines.",
      "Coding Challenges": "A set of coding challenges and practice problems to enhance programming skills."
    },
    "C Language": [
      {
        "title": "C Language Summary",
        "date": "2025-07-13",
        "content": "C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It is known for its efficiency, portability, and low-level memory access. C forms the foundation for many modern languages like C++, Java, and Python.<br><br>✅ Key Features:<br>- Procedural programming: Organizes code into functions<br>- Fast and efficient: Direct access to memory and hardware<br>- Low-level memory access: Use of pointers and direct memory manipulation<br>- Portable: Code can run on different platforms with minimal changes<br>- Foundation for system programming, embedded systems, and game development<br><br>📁 Uses:<br>- Operating systems (Unix, Linux)<br>- Device drivers<br>- Embedded systems<br>- Game engines<br><br>🧩 Basic Structure:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    printf(\"Hello, World!\\n\");<br>    return 0;<br>}<br>```<br>This program includes the standard I/O library, defines the main function, prints a message, and returns 0 to indicate successful execution."
      },
      {
        "title": "Structure of C Program",
        "date": "2025-07-13",
        "content": "A C program typically consists of several sections:<br><br>1️⃣ Preprocessor directives: Instructions to the compiler, such as #include and #define.<br>2️⃣ Global declarations: Variables and functions declared outside main().<br>3️⃣ main() function: Entry point of the program.<br>4️⃣ User-defined functions: Additional functions for modularity.<br><br>📌 Example:<br>```c<br>#include <stdio.h>      // Preprocessor<br><br>int sum(int a, int b);  // Function declaration<br><br>int main() {<br>    int result = sum(2, 3);<br>    printf(\"%d\", result);<br>    return 0;<br>}<br><br>int sum(int a, int b) {  // Function definition<br>    return a + b;<br>}<br>```<br>This program demonstrates function declaration, definition, and usage."
      },
      {
        "title": "Keywords and Identifiers",
        "date": "2025-07-13",
        "content": "🔑 **Keywords**: Reserved words used by the C compiler that have special meaning and cannot be used as identifiers. Examples include:<br>- int<br>- return<br>- if<br>- else<br>- while<br>- for<br>- break<br>- continue<br><br>🆔 **Identifiers**: Names given to variables, functions, arrays, etc. Identifiers must follow these rules:<br>- Only alphabets, digits, and underscores<br>- Cannot start with a digit<br>- Case-sensitive<br>- No spaces or special symbols<br><br>Example:<br>```c<br>int total_sum = 0;<br>float average;<br>```"
      },
      {
        "title": "Variables and Data Types",
        "date": "2025-07-13",
        "content": "🔸 A variable is a named memory location to store data. Variables must be declared with a data type before use.<br><br>📦 **Data Types in C**:<br>- int: Integers (typically 2 or 4 bytes)<br>- float: Single-precision floating point numbers<br>- double: Double-precision floating point numbers<br>- char: Single character (1 byte)<br>- void: No value<br><br>Modifiers like short, long, signed, and unsigned can alter the range of data types.<br><br>🧪 Example:<br>```c<br>int age = 20;<br>float pi = 3.14;<br>char grade = 'A';<br>double salary = 50000.50;<br>unsigned int count = 100;<br>```"
      },
      {
        "title": "Operators in C",
        "date": "2025-07-13",
        "content": "Operators are symbols that perform operations on variables and values.<br><br>🔹 Types of Operators:<br>- Arithmetic: +, -, *, /, % (addition, subtraction, multiplication, division, modulus)<br>- Relational: ==, !=, >, <, >=, <= (comparison)<br>- Logical: &&, ||, ! (AND, OR, NOT)<br>- Assignment: =, +=, -=, *=, /=, %= (assign and update values)<br>- Increment/Decrement: ++, -- (increase or decrease by 1)<br>- Bitwise: &, |, ^, ~, <<, >> (manipulate bits)<br>- Ternary: ?: (conditional expression)<br><br>Example:<br>```c<br>int a = 5, b = 3;<br>int sum = a + b;  // Arithmetic<br>if (a > b) {      // Relational<br>    printf(\"a is greater than b\");<br>}<br>int c = a << 1;   // Bitwise left shift<br>```"
      },
      {
        "title": "Input and Output in C",
        "date": "2025-07-13",
        "content": "C uses standard input/output functions from stdio.h for communication with the user.<br><br>📥 **Input**: Use scanf() to read user input. Format specifiers like %d (int), %f (float), %c (char), %s (string) are used.<br>📤 **Output**: Use printf() to display output. Format specifiers are also used here.<br><br>Example:<br>```c<br>#include <stdio.h><br><br>int main() {<br>    int num;<br>    printf(\"Enter a number: \");<br>    scanf(\"%d\", &num);<br>    printf(\"You entered: %d\\n\", num);<br>    return 0;<br>}<br>```<br>This program prompts the user for a number and prints it back."
      }
    ]
  };

  res.status(200).json(publicNotes);
}
//  <object data="os_syllabus.pdf#toolbar=0&navpanes=0&scrollbar=0"
