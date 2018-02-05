axios.get('/data/additional-sample.txt').then(({data}) => {
    const fc = flowchart.parse(data);
    fc.drawSVG('chart');
  });