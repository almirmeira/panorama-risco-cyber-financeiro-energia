#!/usr/bin/env python3
"""
Gera os formatos derivados do favicon a partir de public/favicon.svg.

A fonte da verdade é o SVG — os PNG/ICO daqui são derivados e devem ser
regerados por este script, nunca editados à mão.

Uso:  ./gerar-favicons.py

Regra do projeto: todo símbolo é validado a 16px e 32px antes de entregar.
Arco fino e linha de 1px somem em tamanho de aba; é o teste que decide o
desenho, não a aparência a 512px.
"""

import os
import sys

import cairosvg
from PIL import Image

AQUI = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(os.path.dirname(AQUI), "public")
SVG = os.path.join(PUBLIC, "favicon.svg")

FUNDO = (13, 17, 23, 255)   # #0d1117, a base da paleta canônica


def render(tamanho):
    saida = os.path.join(PUBLIC, f"favicon-{tamanho}.png")
    cairosvg.svg2png(url=SVG, write_to=saida, output_width=tamanho, output_height=tamanho)
    return saida


def main():
    if not os.path.exists(SVG):
        print(f"não encontrei {SVG}", file=sys.stderr)
        return 1

    # PNG para navegadores que não usam o SVG.
    for t in (16, 32, 48):
        print("gerado", render(t))

    # ICO multi-resolução — é o que a barra de endereço de navegadores antigos
    # e o Windows procuram. Um ICO só de 16px fica serrilhado em tela HiDPI.
    base = Image.open(os.path.join(PUBLIC, "favicon-48.png")).convert("RGBA")
    ico = os.path.join(PUBLIC, "favicon.ico")
    base.save(ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("gerado", ico)

    # apple-touch-icon: o iOS aplica a PRÓPRIA máscara arredondada por cima.
    # Entregar com canto transparente faz aparecer um recorte escuro na borda,
    # então este vai achatado sobre fundo sólido, sem transparência.
    png180 = os.path.join(PUBLIC, "apple-touch-icon.png")
    cairosvg.svg2png(url=SVG, write_to="/tmp/_at.png", output_width=180, output_height=180)
    chapado = Image.new("RGBA", (180, 180), FUNDO)
    chapado.alpha_composite(Image.open("/tmp/_at.png").convert("RGBA"))
    chapado.convert("RGB").save(png180, format="PNG")
    os.remove("/tmp/_at.png")
    print("gerado", png180)

    # 512 para manifesto/PWA e para uso em apresentação.
    print("gerado", render(512))
    return 0


if __name__ == "__main__":
    sys.exit(main())
