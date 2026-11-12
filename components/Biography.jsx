import React from "react";
import Link from "next/link";
export const Education = () => {
  return (
    <>
      <div>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Ph.D. (Ongoing)</strong> - Indian Institute of Technology
            Madras, Chennai, India.
          </li>
          <li>
            <strong>M.Sc. (2022)</strong> - National Institute of Technology
            Rourkela, Odisha, India.
          </li>
          <li>
            <strong>B.Sc. (2017)</strong> - National Institute of Technology
            Rourkela, Odisha, India.
          </li>
        </ul>

        <h2 id="academic-achievements">Academic Achievement</h2>
        <ul>
          <li>
            <strong>Prime Minister&rsquo;s Research Fellowship</strong> - 2022
          </li>
          <li>
            <strong>AIR 52</strong> in
            <em> Joint Entrance Screening Test (JEST)</em> - 2022
          </li>
          <li>
            <strong>AIR 92 (JRF)</strong> in
            <em> Joint CSIR-UGC National Eligibility Test (NET) in Physics</em>-
            2022
          </li>
          <li>
            <strong>AIR 10507</strong> in
            <em> Joint Entrance Exam Advanced (JEE - Advanced)</em> - 2017
          </li>
          <li>
            <strong>AIR 13705</strong> in
            <em> Joint Entrance Exam Mains (JEE - Mains)</em> - 2017
          </li>
        </ul>
      </div>
    </>
  );
};
export const Biography = () => {
  return (
    <>
      <section>
        <div>
          <div>Hi, I am Bhavesh. Again, welcome to my website.</div>
          <br />
          <div>
            I am a PhD scholar in the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://physics.iitm.ac.in"
            >
              {" "}
              Department of Physics
            </a>{" "}
            at the Indian Institute of Technology Madras. I work in the field of
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://quantum.iitm.ac.in"
            >
              {" "}
              Quantum Information and Computation
            </a>{" "}
            under the supervision of
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://physics.iitm.ac.in/~prabhamd/index.html"
            >
              {" "}
              Dr. Prabha Mandayam.{" "}
            </a>
            My current research interest aims at the Noise Model, Decoherence
            Mechanism, Quantum Error
            Correction/Prevention/Suppression/Mitigation and Quantum Fault
            Tolerance in the Noisy intermediate-scale quantum (NISQ) era.
          </div>
          <br />
          <div>
            In addition to my research endeavors, I actively engage in athletic
            pursuits such as swimming and tennis. Furthermore, I demonstrate a
            keen interest in the study of the equity market, consistently
            seeking to expand my understanding of financial dynamics and market
            trends.
          </div>

          <Motivation />
        </div>
      </section>
    </>
  );
};

const Motivation = () => {
  return (
    <>
      <h2>
        Motivation for pursuing a Ph.D. in Quantum Information and Computing
      </h2>
      <p>
        I came across quantum mechanics and quantum statistical mechanics as one
        of my core courses and advanced quantum mechanics and quantum field
        theory as my professional electives during my undergrad and postgrad.
        Thus, I got exposure to some problems and research in quantum
        information and computing. The most promising application that attracted
        me was in Computational Chemistry to provide immense power to the
        machine to successfully map the molecules, which, in turn, potentially
        opens opportunities for pharmaceutical research like drug design &
        development. With the help of artificial intelligence & machine
        learning, Quantum computing can help develop various techniques to
        combat cybersecurity threats. I found problems related to
        decoherence/noise affecting qubits most interesting. However, as the
        number of applications increased, it became challenging for traditional
        computers to match the accuracy and speed. <br />
        <br />
        Decoherence is a concept in quantum mechanics that refers to the process
        by which a quantum system loses coherence and becomes more classical or,
        in other words, more like a classical probability distribution. When a
        quantum system interacts with its environment, the entanglement between
        the system and its surroundings can lead to decoherence. The environment
        effectively monitors the quantum system, causing it to lose its delicate
        quantum superposition and become entangled with the environment instead.
        This results in the emergence of classical behaviour and a loss of
        distinct quantum features. Understanding and controlling decoherence is
        essential for developing quantum technologies, such as quantum computing
        and quantum information processing, where maintaining quantum coherence
        is necessary for the proper functioning of quantum algorithms and
        protocols. <br />
        <br />
        Moreover, quantum computing can help in processing complex problems in
        significantly less time with quality, even though all my past work
        experience was in gravity. Now I want to work more on
        technological-driven problems. Lastly, I did not had any professors and
        projects in my undergrad and postgrad institute related to quantum
        information and computing. Honestly, I did not enjoy gravity as much as
        quantum computing. Thus I ended up interested in learning Quantum
        Information and Computing. My broad research interests are Quantum Error
        correction and Quantum cryptography as a tool to explore nature&#x27;s
        most beautiful and elegant structures. <br />
      </p>
    </>
  );
};
