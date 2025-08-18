// Interface Robot com método obrigatório identify()
interface Robot {
  identify: (id: number) => void;
}

// Classe que implementa a interface Robot
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }

  // Método extra, não exigido pela interface
  answerQuestion() {
    console.log('42!');
  }
}

const robot = new OneSeries();
robot.identify(7.3);
robot.answerQuestion();

// Interface Directory com método obrigatório addFile()
interface Directory {
  addFile: (name: string) => void;
}

// Classe que implementa a interface Directory
class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  // Método extra, não exigido pela interface
  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
