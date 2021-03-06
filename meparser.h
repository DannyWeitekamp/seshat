/*Copyright 2014 Francisco Alvaro

 This file is part of SESHAT.

    SESHAT is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SESHAT is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SESHAT.  If not, see <http://www.gnu.org/licenses/>.
*/
#ifndef _MEPARSER_
#define _MEPARSER_

#include <cstdio>
#include <cstdlib>
#include <algorithm>
#include <tuple>
#include "symrec.h"
#include "sample.h"
#include "sparel.h"
#include "duration.h"
#include "segmentation.h"
#include "logspace.h"
#include "grammar.h"
#include "hypothesis.h"
#include "tablecyk.h"
#include "cellcyk.h"

#include "nlohmann/json.hpp"
using json = nlohmann::json;

class meParser{

  Grammar *G;

  int   max_strokes;
  float clusterF, segmentsTH;
  float ptfactor, pbfactor, rfactor;
  float qfactor, dfactor, gfactor, InsPen;

  SymRec *sym_rec;
  GMM *gmm_spr;
  DurationModel  *duration;
  SegmentationModelGMM *segmentation;

  //Private methods
  void loadSymRec(char *conf);
  int  tree2dot(FILE *fd, Hypothesis *H, int id);


  void initCYKterms(Sample *m, TableCYK *tcyk, int N, int K);

  void combineStrokes(Sample *M, TableCYK *tcyk, LogSpace **LSP, int N);
  CellCYK* fusion(Sample *M, ProductionB *pd, Hypothesis *A, Hypothesis *B, int N, double prob);

 public:
  meParser();
  meParser(char *conf);
  ~meParser();
  void init(char *conf);

  vector<string> getSymbolStrings();
  void recognize_symbol_recast(uintptr_t pts_ptr, int n_strokes, int n_classes, uintptr_t cls_ptr, uintptr_t prob_ptr);
  std::tuple<vector<int>,vector<float>> recognize_symbol(double *points, int n_strokes, int n_classes);
  std::tuple<vector<int>,vector<int>,vector<float>> recognize_symbols(double *points, int n_strokes, int n_classes);
  //Parse math expression
  void parse_me(Sample *M);
  
  //Output formatting methods
  void print_symrec(Hypothesis *H);
  void print_latex(Hypothesis *H);
  void save_dot( Hypothesis *H, char *outfile );

  void print_json(Hypothesis *H, Sample *M);
  json get_json(Hypothesis *H, int *index);
  void show_strokes(Sample *M);
  json add_boxes(json j, Sample *M);
  void save_tree(Hypothesis *H, Sample *M, char *outfile);
  void get_bboxes(json tree, vector<json> *bboxes);
  void save_bboxes(json j, char *outfile);
};

#endif
