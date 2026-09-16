# Scontorna il ritratto della hero: rimuove il fondo bianco con u2net_human_seg
# (modello specifico per figure umane, bordi capelli piu' puliti del default).
from rembg import remove, new_session
from PIL import Image

SRC = 'public/assets/psicologa-sarnico-gaia-bresciani.webp'
DST = 'public/assets/psicologa-gaia-bresciani-cutout.webp'

img = Image.open(SRC).convert('RGBA')
print('sorgente:', img.size)

session = new_session('u2net_human_seg')
out = remove(img, session=session)

# Ritaglia il bounding box della figura per eliminare margini trasparenti inutili
bbox = out.getbbox()
print('bbox figura:', bbox)
out = out.crop(bbox)

out.save(DST, 'WEBP', quality=92)
print('salvato:', DST, out.size)
