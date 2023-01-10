import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import XLSX from "xlsx";
import './UploadUsers.css'
export default function UploadUsers() {

  const [fileValue, setFileValue] = useState('');
  const [data, setData] = useState();
  const [validIndex, setValidIndex] = useState([]);
  const [notValidIndex, setNotValidIndex] = useState([]);
  const [validAndNotClubsIndex, setValidAndNotClubsIndex] = useState([]);

  String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };

  function clearInput(e) {
    e.target.value = null;
  }

  function filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setFileValue(file);
  }

  useEffect(() => {
    readFile();
  }, [fileValue]);

  useEffect(() => {
    if (!data) return;
    console.log(JSON.stringify(data));
    let valid = 0, notValid = 0, validAndNotClubs = 0;
    let validIndex = [], notValidIndex = [], validAndNotClubsIndex = [];
    data.forEach((x, i) => {
      var test = checkLuhn(x.CARD_NUM);
      if (test) {
        ++valid;
        validIndex.push(i + 2);
        test = validateCardNo(x.CARD_NUM);
        if (!test)
          validAndNotClubsIndex.push(i + 2)
      }
      else {
        ++notValid;
        notValidIndex.push(i + 2)
      }
    });
    console.log('valid', valid)
    console.log('notValid', notValid)
    console.log('validAndNotClubs', validAndNotClubs)
    console.log('validIndex', validIndex);
    console.log('notValidIndex', notValidIndex);
    console.log('validAndNotClubsIndex', validAndNotClubsIndex);
    setValidIndex(validIndex);
    setNotValidIndex(notValidIndex);
    setValidAndNotClubsIndex(validAndNotClubsIndex);
  }, [data]);

  // var ValidateCreditCard = function (cardNo) {
  //   if(cardNo === '') return false;
  //   var s = 0;
  //   var doubleDigit = false;
  //   for (var i = cardNo.length - 1; i >= 0; i--) {
  //     var digit = +cardNo[i];
  //     if (doubleDigit) {
  //       digit *= 2;
  //       if (digit > 9)
  //         digit -= 9;
  //     }
  //     s += digit;
  //     doubleDigit = !doubleDigit;
  //   }
  //   return s % 10 == 0;
  // }

  function readFile() {
    if (!fileValue) return;
    var f = fileValue;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      setData(convertToJson(data)); // shows data in json format
    };
    reader.readAsBinaryString(f);
  }

  function convertToJson(csv) {
    var lines = csv.replaceAll('.00', '').split("\n");

    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      obj.CARD_NUM = obj.CARD_NUM;
      result.push(obj);
    }

    //return result; //JavaScript object
    return result; //JSON
  }

  var validateCardNo = function (no) {
    return (no && checkLuhn(no) &&
      no.length == 16 && (no[0] == 4 || no[0] == 5 && no[1] >= 1 && no[1] <= 5 ||
        (no.indexOf("6011") == 0 || no.indexOf("65") == 0)) ||
      no.length == 15 && (no.indexOf("34") == 0 || no.indexOf("37") == 0) ||
      no.length == 13 && no[0] == 4)
  }

  var checkLuhn = function (cardNo) {
    if(cardNo === '') return false;
    var s = 0;
    var doubleDigit = false;
    for (var i = cardNo.length - 1; i >= 0; i--) {
      var digit = +cardNo[i];
      if (doubleDigit) {
        digit *= 2;
        if (digit > 9)
          digit -= 9;
      }
      s += digit;
      doubleDigit = !doubleDigit;
    }
    return s % 10 == 0;
  }

  return (
    <>
      <input type="file" onChange={filePathset} onClick={clearInput} />
      {validIndex.length > 0 && <div>סה"כ אשראי תקינים: {validIndex.length}</div>}
      {validIndex.length > 0 && <div>סה"כ אשראי תקינים אבל ללא התאמה לחברת אשראי: {validAndNotClubsIndex.length}</div>}
      {notValidIndex.length > 0 && <div>סה"כ אשראי לא תקינים: {notValidIndex.length}</div>}
      {
        validIndex.length > 0 &&
        <div className="conteinarResult">
          <div>מספרי שורות של אשראי תקינים</div>
          {validIndex.map(x => <span>{x}, </span>)}
        </div>
      }
      {
        validIndex.length > 0 &&
        <div className="conteinarResult">
          <div>מספרי שורות של אשראי תקינים  אבל ללא התאמה לחברת אשראי</div>
          {validAndNotClubsIndex.map(x => <span>{x}, </span>)}
        </div>
      }
      {
        notValidIndex.length > 0 &&
        <div className="conteinarResult">
          <div>מספרי שורות של אשראי לא תקינים</div>
          {notValidIndex.map(x => <span>{x}, </span>)}
        </div>
      }
    </>
  )
}