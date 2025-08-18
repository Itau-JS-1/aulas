// Exemplo de composição de tipos com About, General e Version
interface About {
  general: General;
}

interface General {
  id: number;
  name: string;
  version: Version;
}

interface Version {
  versionNumber: number;
}

// Uso prático da interface About
const robotInfo: About = {
  general: {
    id: 1,
    name: 'C3-PO',
    version: {
      versionNumber: 3,
    },
  },
};

console.log(robotInfo);

// Exercício: quebrando Directory em Config e DefaultConfig
interface Directory {
  addFile: (name: string) => void;
  config: Config;
}

interface Config {
  default: DefaultConfig;
}

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

// Classe que implementa Directory usando os tipos compostos
class DesktopDirectory implements Directory {
  config: Config = {
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
