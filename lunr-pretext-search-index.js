var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": "   "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   "
},
{
  "id": "sec_first-intro",
  "level": "1",
  "url": "sec_first-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear and Non-linear circuit:",
  "body": " Linear and Non-linear circuit:   Circuit whose elements follow Ohm's law or has linear relationship between current and voltage is known as linear circuit, otherwise it is a non-linear circuit.    Independent and Dependent power sources:  A device or energy source which provides voltage or current in the circuit is known as power source. It is of two types. A device whose power is independent on the other element\/s of the circuit is known as independent source, otherwise it is a dependent source. Typically independent sources are of two terminal devices and dependent sources are of four terminal devices. The dependent sources are also known as controlled sources. A controlled current source can be controlled by current or voltage in the circuit, similarly controlled voltage source can also be controlled by current or voltage in the circuit. The circuit symbols of some of the components are given here.       Note: It is considered that an ideal voltage source has a negligible internal resistance and an ideal current source has an infinite internal resistance. Ideal voltmeter has an infinite internal resistance and ideal ammeter has a negligible internal resistance.    Network Theorem      Superposition Theorem:  It states that total voltage drop at an element of the circuit or total current through an element of the circuit is the algebraic sum of the voltages across (or currents through) this element due to individual sources as if they were acting on it independently. Superposition theorem will be helpful when more than one type of sources are acting in a linear circuit.      Steps to use Superposition theorem:  Step 1: Identify an element as a load resistor across which voltage or current is to be calculated.     Step 2: Remove all the sources from the circuit except one independent source and leave all the dependent sources as they are.     Step 3: When removing sources make sure the voltage sources are replaced by short circuit or leaving behind its internal resistances and current sources are replaced by open circuit.     Step 4: Find the current or voltage across the load for each of the individual sources at a time using basic circuit analysis tools such as Ohm's law and Kirchhoff's law.     Step 5: Find the algebraic sum of individual currents through or voltages across the load.       Thevenin's Theorem:  It states that any complex or a linear circuit network with current and voltage sources can be replaced by an equivalent circuit containing a single independent voltage source with single resistor in a series.      Steps to use Superposition theorem:  Step 1: Open the load resistor.     Step 2: Calculate the open circuit voltage and call it a Thevenin Voltage, .     Step 3: Open current sources and short voltage sources.     Step 4: Calculate the open circuit resistance and call it a Thevenin Resistance, .     Step 5: Redraw the circuit with calculated as a voltage source, as a series resistance, and finally connect the load resistor.     Now solve using basic circuit analysis tools such as Ohm's law and Kirchhoff's law.        Norton's Theorem:  It states that any complex or a linear circuit network with current and voltage sources can be replaced by an equivalent circuit containing a single independent current source with a single parallel resistor .      Steps to use Superposition theorem:  Step 1: Short the load resistor.     Step 2: Calculate the short circuit current and call it Norton Current, .     Step 3: Open current sources, short voltage sources, and open load resistor.     Step 4: Calculate the open circuit resistance and call it Norton Resistance, .     Step 5: Redraw the circuit with calculated as a current source, as a parallel resistance, and finally connect the load resistor.     Now solve using basic circuit analysis tools such as Ohm's law and Kirchhoff's law.       It is useful to convert current source into voltage source and vice a versa sometime to solve the complex circuit . Thevenin's logic can be applied to the voltage source with a resistor in series and Norton's logic can be applied to the current source with a resistor in parallel to convert from one another. They are interchangeable.    Millman's Theorem:  It states that when a number of voltage sources and their respective (internal) resistors are in parallel then the arrangement can be replaced by a single equivalent voltage source V in series with an equivalent series resistance R.      Steps to use Millman's theorem:  Step 1: The load must be removed.     Step 2: Short the load terminal temporarily to calculate total current in the circuit.     Step 3: The voltage sources is replaced with short circuits.     Step 4: Calculate the equivalent resistance, .     Step 5: Use Ohm's law to calculate equivalent voltage, .           Reciprocity Theorem:  It states that in a linear and bilateral circuit the current due to a single independent source in any particular branch of circuit is equal to the current in the original branch where the source was placed when the source is shifted to that particular branch of circuit. In other words, the ratio of response to excitation is constant in the circuit where voltage source (or excitation) and current response (ammeter) can be interchangeable.      Steps to use Reciprocity Theorem:  Step 1: First check if the given circuit is a linear and bilateral (reciprocal circuit) with only one source.     Step 2: Select the branch between which reciprocity is to be checked.     Step 3: Find the value of current in branch using basic circuit analysis.     Step 4: The voltage source is interchanged between the branches concerned.     Step 5: Calculate the current in the branch where the voltage source was existing earlier.     Step 6: Check that current calculated in step 3 and step 5 are same.          "
},
{
  "id": "CircuitSymbol",
  "level": "2",
  "url": "sec_first-intro.html#CircuitSymbol",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "p-6",
  "level": "2",
  "url": "sec_first-intro.html#p-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: "
},
{
  "id": "p-9",
  "level": "2",
  "url": "sec_first-intro.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steps to use Superposition theorem: "
},
{
  "id": "p-16",
  "level": "2",
  "url": "sec_first-intro.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steps to use Superposition theorem: "
},
{
  "id": "Thevenin",
  "level": "2",
  "url": "sec_first-intro.html#Thevenin",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "   "
},
{
  "id": "p-24",
  "level": "2",
  "url": "sec_first-intro.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steps to use Superposition theorem: "
},
{
  "id": "Norton",
  "level": "2",
  "url": "sec_first-intro.html#Norton",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": "   "
},
{
  "id": "p-33",
  "level": "2",
  "url": "sec_first-intro.html#p-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steps to use Millman's theorem: "
},
{
  "id": "Vab",
  "level": "2",
  "url": "sec_first-intro.html#Vab",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "   "
},
{
  "id": "p-40",
  "level": "2",
  "url": "sec_first-intro.html#p-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steps to use Reciprocity Theorem: step 3 step 5 "
},
{
  "id": "reciprocity1",
  "level": "2",
  "url": "sec_first-intro.html#reciprocity1",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "   "
},
{
  "id": "sec_first-examplesA",
  "level": "1",
  "url": "sec_first-examplesA.html",
  "type": "Section",
  "number": "1.2",
  "title": "Examples A",
  "body": " Examples A    Find the current through resistance.      Remove 4 V source and find in the circuit.      Remove 2 V source and find in the circuit.             Find the current i in the circuit.      Remove 4 V voltage source and open 2 A current source from the circuit to find Using Kirchhoff's voltage law:      Remove 3 V voltage source and open 2 A current source from the circuit to find Using Kirchhoff's voltage law:      Remove 3 V and 4 V voltage sources from the circuit to find From Kirchhoff's current law: From Kirchhoff's voltage law in outer loop:             Find the voltage drop at the given resistance in the circuit.      Open 10 A current source from the circuit to find Using Kirchhoff's voltage law in loop : From loop : But, is a voltage drop at resistance.     From eqns. and , we have -  On solving eqns. and , we get -       Now, short 20 V source and leave 10 A current source active in the circuit. From loop of   From loop of : But, is a voltage drop at resistance.   From loop of : From eqns. and , we have - From eqns. and , we have - On solving eqns. and , we get -   Hence,       Find the current in the circuit.      Short circuit 4 V voltage source in the circuit to find Using nodal analysis: Here V is the voltage at upper nodes.    Now, Also,        Now short 1 V source to find . Now, Also,  Hence,     "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec_first-examplesA.html#example-1",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  Find the current through resistance.      Remove 4 V source and find in the circuit.      Remove 2 V source and find in the circuit.          "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec_first-examplesA.html#example-2",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Find the current i in the circuit.      Remove 4 V voltage source and open 2 A current source from the circuit to find Using Kirchhoff's voltage law:      Remove 3 V voltage source and open 2 A current source from the circuit to find Using Kirchhoff's voltage law:      Remove 3 V and 4 V voltage sources from the circuit to find From Kirchhoff's current law: From Kirchhoff's voltage law in outer loop:          "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_first-examplesA.html#example-3",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Find the voltage drop at the given resistance in the circuit.      Open 10 A current source from the circuit to find Using Kirchhoff's voltage law in loop : From loop : But, is a voltage drop at resistance.     From eqns. and , we have -  On solving eqns. and , we get -       Now, short 20 V source and leave 10 A current source active in the circuit. From loop of   From loop of : But, is a voltage drop at resistance.   From loop of : From eqns. and , we have - From eqns. and , we have - On solving eqns. and , we get -   Hence,    "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec_first-examplesA.html#example-4",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Find the current in the circuit.      Short circuit 4 V voltage source in the circuit to find Using nodal analysis: Here V is the voltage at upper nodes.    Now, Also,        Now short 1 V source to find . Now, Also,  Hence,    "
},
{
  "id": "sec_first-examplesB",
  "level": "1",
  "url": "sec_first-examplesB.html",
  "type": "Section",
  "number": "1.3",
  "title": "Examples B",
  "body": " Examples B    Find the Thevenin's equivalent circuit.      Remove load resistance from the circuit, and find Since the resistance is on open side there is no current passing through it. Hence .    Using Kirchoff's voltage law in a loop      Now short 10 V source and look inside the circuit from open side to find the .   Therefore the final circuit looks like        Find the Thevenin's equivalent circuit.        Remove load resistance from the circuit, and find Since -1 A current is passing through resistance,     Now short 3 V voltage source and open -1 A current source to find . Since inner circuit is not closed.  Therefore the final circuit looks like        Find the Thevenin's equivalent circuit.        From the closed loop, we have       Now short 20 V voltage source to find    Therefore the final circuit looks like        Find the Thevenin's equivalent circuit.            Find the Thevenin's equivalent circuit.            Find the Thevenin's equivalent circuit.          "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec_first-examplesB.html#example-5",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.      Remove load resistance from the circuit, and find Since the resistance is on open side there is no current passing through it. Hence .    Using Kirchoff's voltage law in a loop      Now short 10 V source and look inside the circuit from open side to find the .   Therefore the final circuit looks like     "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec_first-examplesB.html#example-6",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.        Remove load resistance from the circuit, and find Since -1 A current is passing through resistance,     Now short 3 V voltage source and open -1 A current source to find . Since inner circuit is not closed.  Therefore the final circuit looks like     "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec_first-examplesB.html#example-7",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.        From the closed loop, we have       Now short 20 V voltage source to find    Therefore the final circuit looks like     "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_first-examplesB.html#example-8",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.         "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec_first-examplesB.html#example-9",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.         "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec_first-examplesB.html#example-10",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Find the Thevenin's equivalent circuit.         "
},
{
  "id": "sec_first-examplesC",
  "level": "1",
  "url": "sec_first-examplesC.html",
  "type": "Section",
  "number": "1.4",
  "title": "Examples C",
  "body": " Examples C    Find the Norton's equivalent circuit.            Find the Norton's equivalent circuit.            Find the Norton's equivalent circuit.            Find the Norton's equivalent circuit.          "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_first-examplesC.html#example-11",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "  Find the Norton's equivalent circuit.         "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec_first-examplesC.html#example-12",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  Find the Norton's equivalent circuit.         "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec_first-examplesC.html#example-13",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Find the Norton's equivalent circuit.         "
},
{
  "id": "example-14",
  "level": "2",
  "url": "sec_first-examplesC.html#example-14",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Find the Norton's equivalent circuit.         "
},
{
  "id": "ex_first",
  "level": "1",
  "url": "ex_first.html",
  "type": "Exercises",
  "number": "1.5",
  "title": "Exercise",
  "body": "  Exercise  Find the current and voltage in the circuit.   Find the open circuit voltage using Thevenin's theorem.   Find current using Norton's theorem if load resistance is .   Find equivalent voltage using Milliman's theorem.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "ex_first.html#exercise-1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "Find the current and voltage in the circuit.  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "ex_first.html#exercise-2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "Find the open circuit voltage using Thevenin's theorem.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "ex_first.html#exercise-3",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "Find current using Norton's theorem if load resistance is .  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "ex_first.html#exercise-4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "Find equivalent voltage using Milliman's theorem.  "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "append_partdiff",
  "level": "1",
  "url": "append_partdiff.html",
  "type": "Appendix",
  "number": "B",
  "title": "",
  "body": "     "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "refs-list",
  "level": "1",
  "url": "refs-list.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Circuit Analysis: Theory and Practice, Robbins, Cengage Learning, 2007.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
