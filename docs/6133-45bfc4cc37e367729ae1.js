"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6133],{7551:function(e,n,o){o.r(n),n.default="import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'\nimport { setupLazyLoadImage } from './lazy-load'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n\nconst OPTIONS: EmblaOptionsType = {}\n\nconst emblaNode = <HTMLElement>document.querySelector('.embla')\nconst viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')\n\nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS)\nconst loadImagesInView = setupLazyLoadImage(emblaApi)\n\nemblaApi\n  .on('init', loadImagesInView)\n  .on('reInit', loadImagesInView)\n  .on('slidesInView', loadImagesInView)\n"}}]);
//# sourceMappingURL=6133-45bfc4cc37e367729ae1.js.map