// Interface Robot2 com tipo aninhado
interface Robot2 {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}

// Classe que implementa Robot2
class OneSeries implements Robot2 {
  about;

  constructor(props: { general: { id: number; name: string } }) {
    this.about = props;
  }

  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}

const robot = new OneSeries({ general: { id: 101, name: 'R2-D2' } });
console.log(robot.getRobotId());

// Interface Directory com tipo aninhado para config
interface Directory {
  addFile: (name: string) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

// Classe que implementa Directory
class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
console.log(Desktop.config);
