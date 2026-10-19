export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  /** Short badge label, e.g. "CVPR". */
  abbr: string;
  year: number;
  /** Shown on the home page. */
  selected?: boolean;
  /** Appended after the author list, e.g. "* equal contribution". */
  note?: string;
  links?: { pdf?: string; arxiv?: string; code?: string; project?: string };
  bibtex?: string;
};

/** Spellings of my name across papers; matching authors are bolded. */
export const myNames = ['Hoang M. Le', 'Hoang Le', 'Hoang Minh Le'];

export const publications: Publication[] = [
  {
    title: 'ESC: Emotional Self-correction for Reliable Vision Language Models',
    authors: ['Tien-Huy Nguyen', 'Minh-Nhat Nguyen', 'Nhat-Huy Nguyen', 'Hung-Viet Nguyen', 'Huy Minh Nhat Nguyen', 'Thanh-Huy Nguyen', 'Cuong Tuan Nguyen', 'Hoang M. Le', 'Dat Nguyen', 'Phat Kim Huynh', 'et al.'],
    venue: 'European Conference on Computer Vision (ECCV), pp. 488–506',
    abbr: 'ECCV',
    year: 2026,
    selected: true,
  },
  {
    title: 'Improved Mapping Between Illuminations and Sensors for RAW Images',
    authors: ['Abhijith Punnappurath', 'Luxi Zhao', 'Hoang Le', 'Abdelrahman Abdelhamed', 'SaiKiran Kumar Tedla', 'Michael S. Brown'],
    venue: 'Journal of the Optical Society of America A, 42(8), pp. 1182–1190',
    abbr: 'JOSA A',
    year: 2025,
    selected: true,
  },
  {
    title: 'Towards Efficient and Robust Moment Retrieval System: A Unified Framework for Multi-Granularity Models and Temporal Reranking',
    authors: ['Huu-Loc Tran', 'Tinh-Anh Nguyen-Nhu', 'Huu-Phong Phan-Nguyen', 'Tien-Huy Nguyen', 'Nhat-Minh Nguyen-Dich', 'Anh Dao', 'Huy-Duc Do', 'Quan Nguyen', 'Hoang M. Le', 'Quang-Vinh Dinh'],
    venue: 'CVPR Workshops (IViSE), pp. 3719–3729',
    abbr: 'CVPRW',
    year: 2025,
  },
  {
    title: 'A Lightweight Moment Retrieval System with Global Re-Ranking and Robust Adaptive Bidirectional Temporal Search',
    authors: ['Tinh-Anh Nguyen-Nhu', 'Huu-Loc Tran', 'Nguyen-Khang Le', 'Minh-Nhat Nguyen', 'Tien-Huy Nguyen', 'Hoang-Long Nguyen-Huu', 'Huu-Phong Phan-Nguyen', 'Huy-Thach Pham', 'Quan Nguyen', 'Hoang M. Le', 'et al.'],
    venue: 'CVPR Workshops (IViSE), pp. 3708–3718',
    abbr: 'CVPRW',
    year: 2025,
  },
  {
    title: 'Cycle Training with Semi-Supervised Domain Adaptation: Bridging Accuracy and Efficiency for Real-Time Mobile Scene Detection',
    authors: ['Huu-Phong Phan-Nguyen', 'Anh Dao', 'Tien-Huy Nguyen', 'Tuan Quang', 'Huu-Loc Tran', 'Tinh-Anh Nguyen-Nhu', 'Huy-Thach Pham', 'Quan Nguyen', 'Hoang Le', 'Quang-Vinh Dinh'],
    venue: 'CVPR Workshops (MAI), pp. 1888–1897',
    abbr: 'CVPRW',
    year: 2025,
  },
  {
    title: 'OPSurv: Orthogonal Polynomials Quadrature Algorithm for Survival Analysis',
    authors: ['Lilian W. Bialokozowicz*', 'Hoang M. Le*', 'Tristan Sylvain', 'Peter A. I. Forsyth', 'Vineel Nagisetty', 'Greg Mori'],
    venue: 'arXiv preprint arXiv:2402.01955',
    abbr: 'arXiv',
    year: 2024,
    note: '* equal contribution',
    links: { arxiv: 'https://arxiv.org/abs/2402.01955' },
  },
  {
    title: 'GamutMLP: A Lightweight MLP for Color Loss Recovery',
    authors: ['Hoang M. Le', 'Brian Price', 'Scott Cohen', 'Michael S. Brown'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 18268–18277',
    abbr: 'CVPR',
    year: 2023,
    selected: true,
    links: {
      pdf: 'https://arxiv.org/pdf/2304.11743.pdf',
      arxiv: 'https://arxiv.org/abs/2304.11743',
      code: 'https://github.com/hminle/gamut-mlp',
      project: 'https://gamut-mlp.github.io/',
    },
    bibtex: `@InProceedings{Le_2023_CVPR,
  author    = {Le, Hoang M. and Price, Brian and Cohen, Scott and Brown, Michael S.},
  title     = {GamutMLP: A Lightweight MLP for Color Loss Recovery},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2023},
  pages     = {18268-18277}
}`,
  },
  {
    title: 'Effect of Gradient Descent Optimizers and Dropout Technique on Deep Learning LSTM Performance in Rainfall-Runoff Modeling',
    authors: ['Duong Tran Anh', 'Dat Vi Thanh', 'Hoang Minh Le', 'Bang Tran Sy', 'Ahad Hasan Tanim', 'Quoc Bao Pham', 'Thanh Duc Dang', 'Son T. Mai', 'Nguyen Mai Dang'],
    venue: 'Water Resources Management',
    abbr: 'WRM',
    year: 2022,
  },
  {
    title: "A Machine Learning Framework Based on Extreme Gradient Boosting for Intelligent Alzheimer's Disease Diagnosis Using Structure MRI",
    authors: ['Hong Ong', 'Hoang Le', 'Hoang Nguyen', 'Dong Nguyen', 'Huong Ha', 'Hoan T. Ngo', 'N. T. Duc'],
    venue: 'International Conference on the Development of Biomedical Engineering in Vietnam',
    abbr: 'BME',
    year: 2022,
  },
  {
    title: "Ensemble Learning Using Traditional Machine Learning and Deep Neural Network for Diagnosis of Alzheimer's Disease",
    authors: ['Dong Nguyen', 'Hoang Nguyen', 'Hong Ong', 'Hoang Le', 'Huong Ha', 'N. T. Duc', 'Hoan T. Ngo'],
    venue: 'IBRO Neuroscience Reports, 13',
    abbr: 'IBRO',
    year: 2022,
  },
  {
    title: 'GamutNet: Restoring Wide-Gamut Colors for Camera-Captured Images',
    authors: ['Hoang Le*', 'Taehong Jeong*', 'Abdelrahman Abdelhamed', 'Hyun Joon Shin', 'Michael S. Brown'],
    venue: 'Color and Imaging Conference (CIC29)',
    abbr: 'CIC',
    year: 2021,
    selected: true,
    note: '* equal contribution',
    links: {
      pdf: 'https://drive.google.com/file/d/1zyoO3ogwrstADAAO1TD_4UF9XcFL9Pz9/view?usp=sharing',
      code: 'https://github.com/gamut-mapping/GamutNet',
    },
    bibtex: `@article{Hoang_CIC2021,
  title   = {{GamutNet}: Restoring Wide-Gamut Colors for Camera-Captured Images},
  author  = {Le, Hoang and Jeong, Taehong and Abdelhamed, Abdelrahman and Shin, Hyun Joon and Brown, Michael S},
  journal = {Color and Imaging Conference},
  year    = {2021}
}`,
  },
  {
    title: 'Improving Color Space Conversion for Camera-Captured Images via Wide-Gamut Metadata',
    authors: ['Hoang Le', 'Mahmoud Afifi', 'Michael S. Brown'],
    venue: 'Color and Imaging Conference (CIC28)',
    abbr: 'CIC',
    year: 2020,
    selected: true,
    links: {
      pdf: 'https://drive.google.com/file/d/1vjXx5UQazxWY2h6RTcKRp2XzGvJt-Gcz/view?usp=sharing',
      code: 'https://github.com/hminle/improving-color-space-conversion-via-metadata',
    },
    bibtex: `@article{Hoang_CIC2020,
  title   = {Improving Color Space Conversion for Camera-Captured Images via Wide-Gamut Metadata},
  author  = {Le, Hoang and Afifi, Mahmoud and Brown, Michael S},
  journal = {Color and Imaging Conference},
  year    = {2020}
}`,
  },
  {
    title: 'Deep Learning Convolutional Neural Network in Rainfall-Runoff Modelling',
    authors: ['Song Pham Van', 'Hoang Minh Le', 'Dat Vi Thanh', 'Thanh Duc Dang', 'Ho Huu Loc', 'Duong Tran Anh'],
    venue: 'Journal of Hydroinformatics',
    abbr: 'JHydro',
    year: 2020,
  },
];
