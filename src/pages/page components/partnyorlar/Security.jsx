import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { security } from "../securi";
function Security() {
  const { id } = useParams();
  const [data, setdata] = useState(security[id - 1]);
  return (
    <div className="security_page">
      {data.pagee.map((i, x) => (
        <div className="security_page_item">
          {i.h && <h1 key={x}>{i.h}</h1>}

          <div className="list_container">
            {i.title && <h3>{i.title[0]}</h3>}
            {i.about && <p>{i.about[0]}</p>}
            {i.p && <p key={x}>{i.p}</p>}

            <div className="list_container_item">
              {i.li && (
                <ul>
                  {i.li.slice(0, 6).map((it, ind) => (
                    <li className="list" key={ind}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
              {i.li && (
                <ul>
                  {i.li.slice(6).map((it, ind) => (
                    <li className="list" key={ind}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}

              {i.lis && (
                <ul>
                  {i.lis.slice(0,2).map((it, ind) => (
                    <li className="list" key={ind}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
              
            </div>
            {i.about && <p>{i.about[1]}</p>}
            {i.lis && (
                <ul>
                  {i.lis.slice(2).map((it, ind) => (
                    <li className="list" key={ind}>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            {i.title && <h3 className="name">{i.title[1]}</h3>}
            {i.about && <p>{i.about[2]}</p>}
            {i.about && <p>{i.about[3]}</p>}
            {i.listt &&
            i.listt.map((ite, ine) => (
              <li className="last" key={ine}>
                {ite}
              </li>
            ))}




          </div>

          {i.list &&
            i.list.map((ite, ine) => (
              <li className="last" key={ine}>
                {ite}
              </li>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Security;
