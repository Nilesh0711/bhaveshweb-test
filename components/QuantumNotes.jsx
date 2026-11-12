export function QuantumIntroduction() {
  return (
    <div>
      <p>
        Quantum computers leverage the principles of quantum mechanics, such as
        interference, superposition (Bloch sphere), and entanglement, to perform
        certain types of calculations much faster than classical computers.
        These properties allow them to process a large number of possibilities
        simultaneously (Quantum parallelism).
      </p>

      <p>
        Entanglement is a state where the state of one qubit is directly related
        to the state of another, even if they are physically separated. Changes
        to one qubit instantaneously affect the other, providing a form of
        correlation that can be exploited for computation, like the Control-NOT
        gate.
      </p>

      <p>
        Quantum Gates are used to perform operations on qubits. They manipulate
        the quantum states of qubits and can perform complex operations more
        efficiently than classical logic gates.
      </p>

      <p>
        Quantum Error Correction and Mitigation are two distinct approaches to
        address the challenges posed by errors in quantum computers.
      </p>
    </div>
  );
}
export function QuantumChannel() {
  return (
    <div>
      <p>
        Quantum Noise Channel: Understanding how quantum information is
        transmitted, manipulated, and affected by various sources of noise and
        imperfections in quantum systems. It is a mathematical description of
        how quantum systems evolve and interact with their surroundings.
        Mathematically, a quantum channel is described by a completely positive
        and trace-preserving (CPTP) map. A CPTP map ensures that the quantum
        channel is physically meaningful and preserves the probabilities,
        ensuring the total probability of all possible outcomes remains 1.
      </p>
    </div>
  );
}
