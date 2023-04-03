import React, { Fragment } from "react";
import { PokemonHighestStat } from "../../../common/contant";
import { GetDamageMultiplier } from "../../../common/function";
import Pokemon from "../../../interface/model/Pokemon";
import TypeChart from "./TypeChart";
function PKMSpritesPage(props: { Pokemon: Pokemon | undefined }) {
  const pokemon = props.Pokemon;
  const sprites = pokemon?.sprites;
  const dreamWorld = sprites?.other.dream_world;
  const pkmhome = sprites?.other.home;
  const official = sprites?.other["official-artwork"];
  // console.log(sprites);
  return (
    <Fragment>
      {pokemon && (
        <div className="container-fluid mt-3">
        
          {GetDreamWorldElement(dreamWorld)}
          {GetPKMHomeElement(pkmhome)}
          {GetOfficalElement(official)}
          {GetGeneralElement(sprites)}
        </div>
      )}
    </Fragment>
  );
}

function GetHeaderElement(value: string) {
  return (
    <Fragment>
      <hr></hr>
      <h3>{value}</h3>
      <hr></hr>
    </Fragment>
  );
}
function GetGeneralElement(
  sprites:
    | {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
          dream_world: {
            front_default: string;
            front_female: string;
          };
          home: {
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
          };
          "official-artwork": {
            front_default: string;
            front_shiny: string;
          };
        };
      }
    | undefined
) {
  return (
    <Fragment>
      {GetHeaderElement("General Sprites")}
   
      <div className="row">
      <div className="container">
      <table className="table table-primary table-bordered  ">
          <thead>
            <tr>
              <th className="text-center">Type</th>
              <th className="text-center">Front</th>
              <th className="text-center">Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                <b>Normal</b>
              </td>
              <td className="text-center">
                {sprites?.front_default ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.front_default}
                      loading="lazy"
                    />
                    <p>{sprites.front_female ? "Male" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
                {sprites?.front_female ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.front_female}
                      loading="lazy"
                    />
                    <p>{sprites.front_female ? "Female" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
              </td>
              <td className="text-center">
                {sprites?.back_default ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.back_default}
                      loading="lazy"
                    />
                    <p>{sprites.front_female ? "Male" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
                {sprites?.back_female ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.back_female}
                      loading="lazy"
                    />
                    <p>{sprites.front_female ? "Female" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <b>
                  Shiny <span className="emoji">✨</span>
                </b>
              </td>
              <td className="text-center">
                {sprites?.front_shiny ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.front_shiny}
                      loading="lazy"
                    />
                    <p>{sprites.front_shiny_female ? "Male" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
                {sprites?.front_shiny_female ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.front_shiny_female}
                      loading="lazy"
                    />
                    <p>{sprites.front_shiny_female ? "Female" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
              </td>
              <td className="text-center">
                {sprites?.back_shiny ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.back_shiny}
                      loading="lazy"
                    />
                    <p>{sprites.back_shiny_female ? "Male" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
                {sprites?.back_shiny_female ? (
                  <a className="sprite-share-link ">
                    <img
                      className="img-fixed img-sprite-v16"
                      src={sprites.back_shiny_female}
                      loading="lazy"
                    />
                    <p>{sprites.back_shiny_female ? "Female" : ""}</p>
                  </a>
                ) : (
                  <p className="empty_img">-----</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
      </div>
    </Fragment>
  );
}
function GetDreamWorldElement(
  dreamWorld:
    | {
        front_default: string;
        front_female: string;
      }
    | undefined
) {
  return (
    (dreamWorld?.front_default || dreamWorld?.front_female) && (
      <Fragment>
        {GetHeaderElement("Sprites - Dream World")}
        <div className="row">
          {dreamWorld?.front_default ? (
            <a className="sprite-share-link ">
              <img
                className="img-fixed img-sprite-v16"
                src={dreamWorld.front_default}
                loading="lazy"
              />
              <p>{dreamWorld.front_female ? "Male" : ""}</p>
            </a>
          ) : (
            <></>
          )}
          {dreamWorld?.front_female ? (
            <a className="sprite-share-link ">
              <img
                className="img-fixed img-sprite-v16"
                src={dreamWorld.front_female}
                loading="lazy"
              />
              <p>{dreamWorld.front_female ? "Male" : ""}</p>
            </a>
          ) : (
            <></>
          )}
        </div>
      </Fragment>
    )
  );
}

function GetPKMHomeElement(
  pkmhome:
    | {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      }
    | undefined
) {
  return (
    (pkmhome?.front_default || pkmhome?.front_female) && (
      <Fragment>
        {GetHeaderElement("Sprites - Pokemon Home")}
        <div className="row">
          {pkmhome?.front_default ? (
            <a className="sprite-share-link col-2 ">
              <img
                className="img-fixed img-sprite-v16"
                src={pkmhome.front_default}
                loading="lazy"
              />
              <p>{pkmhome.front_female ? "Male" : ""}(Default)</p>
            </a>
          ) : (
            <></>
          )}
          {pkmhome?.front_female ? (
            <a className="sprite-share-link col-2">
              <img
                className="img-fixed img-sprite-v16"
                src={pkmhome.front_female}
                loading="lazy"
              />
              <p>{pkmhome.front_female ? "Female" : ""}(Default)</p>
            </a>
          ) : (
            <></>
          )}
             {pkmhome?.front_shiny ? (
          <a className="sprite-share-link col-2">
            <img
              className="img-fixed img-sprite-v16"
              src={pkmhome.front_shiny}
              loading="lazy"
            />
            <p>{pkmhome.front_shiny_female ? "Male" : ""} <span className="emoji">✨(Shiny)</span></p>
          </a>
        ) : (
          <></>
        )}
        {pkmhome?.front_shiny_female ? (
          <a className="sprite-share-link col-2">
            <img
              className="img-fixed img-sprite-v16"
              src={pkmhome.front_shiny_female}
              loading="lazy"
            />
            <p>{pkmhome.front_shiny_female ? "Female" : ""} <span className="emoji">✨(Shiny)</span></p>
          </a>
        ) : (
          <></>
        )}
        </div>

     
      </Fragment>
    )
  );
}

function GetOfficalElement(official:{
    front_default:string,
    front_shiny:string
 }|undefined){
     return (
        (official?.front_default || official?.front_default) && (
          <Fragment>
            {GetHeaderElement("Sprites - Offical")}
            <div className="row">
              {official?.front_default ? (
                <a className="sprite-share-link col-2">
                  <img
                    className="img-fixed img-sprite-v16"
                    src={official.front_default}
                    loading="lazy"
                  />
                  <p>(Default)</p>
                </a>
              ) : (
                <></>
              )}
              {official?.front_shiny ? (
                <a className="sprite-share-link col-2">
                  <img
                    className="img-fixed img-sprite-v16"
                    src={official.front_shiny}
                    loading="lazy"
                  />
                  <p>✨(Shiny)</p>
                </a>
              ) : (
                <></>
              )}
            </div>
          </Fragment>
        )
      );
}
export default PKMSpritesPage;
