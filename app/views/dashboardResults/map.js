// Generated by CoffeeScript 1.4.0

(function(document) {
  var index, label, result, subtestPrototype, subtestResult, _i, _j, _len, _len1, _ref, _ref1;
  if (document.collection === "result") {
    result = {
      resultId: document._id,
      enumerator: document.enumerator,
      assessmentName: document.assessmentName,
      startTime: document.start_time,
      tangerineVersion: document.tangerine_version,
      numberOfSubtests: document.subtestData.length,
      subtests: []
    };
    _ref = document.subtestData;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      subtestResult = _ref[_i];
      if (subtestResult.name) {
        result.subtests.push(subtestResult.name);
      }
      subtestPrototype = subtestResult["prototype"];
      if (subtestPrototype === "id") {
        result["id"] = subtestResult.data.participant_id;
      }
      if (subtestPrototype === "location") {
        _ref1 = subtestResult.data.labels;
        for (index = _j = 0, _len1 = _ref1.length; _j < _len1; index = ++_j) {
          label = _ref1[index];
          result["Location: " + label] = subtestResult.data.location[index];
        }
      }
    }
    return emit(document.assessmentId, result);
  }
});
