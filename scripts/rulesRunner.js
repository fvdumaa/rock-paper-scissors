// scripts/rulesRunner.js
import { RockRules, PaperRules, ScissorsRules, LizardRules, SpockRules } from './Rules.js';

function assert(condition, message) {
  if (!condition) {
    console.error('❌ Test failed:', message);
    process.exit(1); // exit with error if logic is wrong
  } else {
    console.log('✅', message);
  }
}

function runTests() {
  const rock = new RockRules('rock');
  assert(rock.beats.includes('lizard') && rock.beats.includes('scissors'), 'Rock beats Lizard and Scissors');
  assert(rock.losesTo.includes('paper') && rock.losesTo.includes('spock'), 'Rock loses to Paper and Spock');

  const paper = new PaperRules('paper');
  assert(paper.beats.includes('rock') && paper.beats.includes('spock'), 'Paper beats Rock and Spock');
  assert(paper.losesTo.includes('scissors') && paper.losesTo.includes('lizard'), 'Paper loses to Scissors and Lizard');

  const scissors = new ScissorsRules('scissors');
  assert(scissors.beats.includes('paper') && scissors.beats.includes('lizard'), 'Scissors beats Paper and Lizard');
  assert(scissors.losesTo.includes('rock') && scissors.losesTo.includes('spock'), 'Scissors loses to Rock and Spock');

  const lizard = new LizardRules('lizard');
  assert(lizard.beats.includes('spock') && lizard.beats.includes('paper'), 'Lizard beats Spock and Paper');
  assert(lizard.losesTo.includes('rock') && lizard.losesTo.includes('scissors'), 'Lizard loses to Rock and Scissors');

  const spock = new SpockRules('spock');
  assert(spock.beats.includes('rock') && spock.beats.includes('scissors'), 'Spock beats Rock and Scissors');
  assert(spock.losesTo.includes('lizard') && spock.losesTo.includes('paper'), 'Spock loses to Lizard and Paper');

  console.log('\n🎉 All logic tests passed!');
}

runTests();