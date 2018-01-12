var tabs = document.querySelectorAll('.tab .tab-header > li');
      var panels = document.querySelectorAll('.tab .tab-container > li');
      tabs.forEach(function (t) {
          t.addEventListener('click',function () {
              tabs.forEach(function (t2) {
                  t2.classList.remove('active');
              });
              t.classList.add('active');
              var index = [].indexOf.call(tabs,this);
              panels.forEach(function (t3) {
                  t3.classList.remove('active');
                  panels[index].classList.add('active');
                  })
          })
      })