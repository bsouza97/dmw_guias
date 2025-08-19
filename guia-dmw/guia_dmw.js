document.getElementById('ano').textContent = new Date().getFullYear();
const tocList = document.getElementById('tocList');
const topics = Array.from(document.querySelectorAll('section.topico'));
tocList.innerHTML = '';
    if (topics.length === 0) {
        tocList.innerHTML = '<li>Sem tópicos ainda</li>';
    } else {
        topics.forEach((sec, i) => {
          const h2 = sec.querySelector('h2');
          const id = sec.id || `topico-${String(i+1).padStart(2, '0')}`;
          sec.id = id;
          const label = h2 ? h2.textContent.trim() : `Tópico ${i+1}`;
          const a = document.createElement('a');
          a.href = `#${id}`;
          a.textContent = label;
          const li = document.createElement('li');
          li.appendChild(a);
          tocList.appendChild(li);
        });
      }

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        });
    });

const toTop = document.getElementById('toTop');
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
