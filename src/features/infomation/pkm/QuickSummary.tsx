import React, { Fragment, useEffect, useState } from "react";
import { PokemonShape } from "../../../common/contant";
import {
  ConvertToGenerationString,
  GetPaddedPokemonId,
} from "../../../common/function";
import BasicModel from "../../../interface/model/BasicModel";
import Pokemon from "../../../interface/model/Pokemon";
import Species from "../../../interface/model/Species";

function QuickSummary(props: {
  Pokemon: Pokemon | undefined;
  Species: Species | undefined;
}) {
  const pokemon = props.Pokemon;
  const species = props.Species;

  const [isOneColor, setIsOneColor] = useState(true);
  const [oneColor, setOneColor] = useState("");
  useEffect(() => {
    if (pokemon && species) {
      if (
        !(Object.prototype.toString.call(species?.color) === "[object Array]")
      ) {
        var temp: any[] = [];
        temp.push(species.color);
        setIsOneColor(true);
        setOneColor(temp[0].name);
      } else {
        setIsOneColor(false);
      }
    }

  }, [oneColor]);

  return (
    <Fragment>
      {pokemon && species && (
        <div className="row">
          <div className="col col-md-6 col-lg-6 text-center">
            <p>
              <a rel="lightbox" data-title="Bulbasaur official artwork">
                <picture>
                  <img
                    src={`https://www.serebii.net/pokemon/art/${GetPaddedPokemonId(
                      pokemon?.id.toString()
                    )}.png`}
                    width="360"
                    height="336"
                    alt="Artwork by Ken Sugimori"
                  />
                </picture>
              </a>
            </p>
            <p className="text-small">
              <a href="/artwork/bulbasaur">Additional artwork</a>
            </p>
          </div>
          <div className="col col-md-6 col-lg-6">
            <h2>Pokédex data</h2>
            <table className="vitals-table table">
              <tbody>
                <tr>
                  <th>National №</th>
                  <td>
                    <strong>
                      {GetPaddedPokemonId(pokemon?.id.toString())}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>
                    {pokemon.types.map((e, index) => (
                      <a
                        className={`type-icon type-${e.type.name}`}
                        href={`/type/${e.type.name}`}
                        key={e.type.name}
                      >
                        {e.type.name}
                      </a>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th>Generation</th>
                  <td>{ConvertToGenerationString(species?.generation.name)}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{pokemon.height / 10}m</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{pokemon.weight / 10}kg</td>
                </tr>
                <tr>
                  <th>Abilities</th>
                  <td>
                    {pokemon.abilities.map((e, index) => (
                      <Fragment key={e.ability.name}>
                        <span className="text-muted">
                          <a
                            className="text-capitalize"
                            href={`/ability/${e.ability.name}`}
                          >
                            {e.ability.name}
                          </a>
                        </span>
                        <br />
                      </Fragment>
                    ))}

                    <br />
                  </td>
                </tr>
                <tr>
                  <th>Capture Rate</th>
                  <td>{species.capture_rate}</td>
                </tr>
                <tr>
                  <th>Shape </th>
                  <td className="text-capitalize">
                 
                    <img
                      alt="Shape.png"
                      src={`/static/img/pkmType/Shape${
                        PokemonShape.filter(
                          (q) => q.name == species.shape.name
                        )[0].id
                      }.webp`}
                      width="40"
                      height="40"
                      className="ml-3"
                    ></img>
                       <p className="d-inline mr-3"> - {species.shape.name}</p>
                  </td>
                </tr>
                <tr>
                  <th>Evolves From</th>
                  {species.evolves_from_species === null ? (
                    <td>None</td>
                  ) : (
                    <td>
                      <a
                        className="text-capitalize"
                        href={`/pokedex/${species.evolves_from_species.name}`}
                      >
                        {species.evolves_from_species.name}
                      </a>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default QuickSummary;
