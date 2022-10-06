/***********************************************************
 **  @project ngx-konverso                              **
 **  @file DotLoader                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 07/04/2021                                         **
 ***********************************************************/
export const DotLoaderTemplate = (color) => `<div class="loading-dots">
<div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  </div>`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG90TG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL1NhbXBsZS9Eb3RMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzZEQUs2RDtBQUc3RCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUM7MERBQ00sS0FBSzs0REFDSCxLQUFLOzREQUNMLEtBQUs7U0FDeEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogIEBwcm9qZWN0IG5neC1rb252ZXJzbyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXHJcbiAqKiAgQGZpbGUgRG90TG9hZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxyXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQHNtYXJ0aWl6LmNvbT4gICoqXHJcbiAqKiAgQERhdGUgMDcvMDQvMjAyMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEb3RMb2FkZXJUZW1wbGF0ZSA9IChjb2xvcjogc3RyaW5nKSA9PiBgPGRpdiBjbGFzcz1cImxvYWRpbmctZG90c1wiPlxyXG48ZGl2IGNsYXNzPVwibG9hZGluZy1kb3RzLS1kb3RcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9XCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImxvYWRpbmctZG90cy0tZG90XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWRvdHMtLWRvdFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuIl19