// Tipo literal que define exatamente os valores aceitos
type Status = 'idle' | 'downloading' | 'complete';

// Função que aceita apenas valores do tipo Status
function downloadStatus(status: Status) {
  if (status === 'idle') console.log('Download');
  if (status === 'downloading') console.log('Downloading...');
  if (status === 'complete') console.log('Download completo!');
}

// Testes
downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');
