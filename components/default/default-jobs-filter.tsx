import React, { useEffect, useState } from "react";
import qs from "qs";

import {
  Input,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Col,
  Row,
  Form,
} from "reactstrap";
import { moberriesApi } from "../../lib/moberries-api";
import { AsyncSelect } from "../shared/async-select";
import { useRouter } from "next/router";
import { updateQueryParams } from "../../lib/helpers";
import { head } from "ramda";

const defaultCities = [
  { placeId: "ChIJAVkDPzdOqEcRcDteW0YgIQQ", name: "Berlin" },
  {
    placeId: "ChIJ2V-Mo_l1nkcRfZixfUq4DAE",
    name: "München",
  },
  {
    placeId: "ChIJuRMYfoNhsUcRoDrWe_I9JgQ",
    name: "Hamburg",
  },
  {
    placeId: "ChIJxZZwR28JvUcRAMawKVBDIgQ",
    name: "Frankfurt",
  },
  {
    placeId: "ChIJ04-twTTbmUcR5M-RdxzB1Xk",
    name: "Stuttgart",
  },
  { placeId: "ChIJ5S-raZElv0cR8HcqSvxgJwQ", name: "Köln" },
  {
    placeId: "ChIJCXjgokgGl0cRf-63THNV_LY",
    name: "Karlsruhe",
  },
  {
    placeId: "ChIJB1lG8XvJuEcRsHMqSvxgJwQ",
    name: "Düsseldorf",
  },
  { placeId: "ChIJdd4hrwug2EcRmSrV3Vo6llI", name: "London" },
  { placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ", name: "Paris" },
  {
    placeId: "ChIJVXealLU_xkcRja_At0z9AGY",
    name: "Amsterdam",
  },
  {
    placeId: "ChIJ93UDf0JFDhMRr6WCLuLCOHo",
    name: "St Julian's, Malta",
  },
];

const DefaultJobsFilter: React.FC = () => {
  const router = useRouter();
  const [path, queryString] = router.asPath.split("?");
  let params = qs.parse(queryString) as ObjectLiteral<string>;
  const [location, setLocation] = useState<string | undefined | null>();
  const [company, setCompany] = useState<string | undefined | null>();
  const [category, setCategory] = useState<string | undefined | null>();
  const [search, setSearch] = useState<string>(router.query.q as string);
  useEffect(() => {
    const fetch = async () => {
      if (!params.company) {
        setCompany(null);
        return;
      }
      const { data: company } = await moberriesApi.getCompany({
        id: Number(params.company),
      });
      setCompany(company);
    };
    fetch();
  }, [params.company]);
  useEffect(() => {
    if (!params.category) {
      setCategory(null);
      return;
    }
    const fetch = async () => {
      const { data: category } = await moberriesApi.getJobRoleCategory({
        id: Number(params.category),
      });
      setCategory(category);
    };
    fetch();
  }, [params.category]);
  useEffect(() => {
    if (!params.location) {
      setLocation(null);
      return;
    }
    const fetch = async () => {
      const {
        data: { results: cities },
      } = await moberriesApi.getCities({
        placeId: String(params.location),
      });
      setLocation(head(cities));
    };
    fetch();
  }, [params.location]);

  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ size: 10, offset: 1 }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              router.push({
                pathname: router.route,
                query: updateQueryParams(params, {
                  q: search ?? null,
                }),
              });
            }}
            noValidate
          >
            <InputGroup size="lg">
              <Input
                value={search}
                onChange={({ target: { value } }) => setSearch(value)}
              />
              <InputGroupAddon addonType="append">
                <Button color="primary">
                  <i className="fas fa-search" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>

          <Row noGutters>
            <Col xs={12} md={4} lg={3} className="pt-1 pr-md-1">
              <AsyncSelect
                id="select-company"
                isClearable
                getOptionLabel={(o) => o.name}
                getOptionValue={(o) => o.id}
                defaultOptions
                value={company}
                loadOptions={async (search) => {
                  const {
                    data: { results: cities },
                  } = await moberriesApi.getCompanyList({
                    search,
                    ordering: "used_jobs",
                  });
                  return cities;
                }}
                onChange={(option) => {
                  setCompany(option);
                  router.push({
                    pathname: router.route,
                    query: updateQueryParams(params, {
                      company: option?.id ?? null,
                    }),
                  });
                }}
              />
            </Col>
            <Col xs={12} md={4} lg={3} className="pt-1 pr-md-1">
              <AsyncSelect
                id="select-category"
                isClearable
                getOptionLabel={(o) => o.name}
                getOptionValue={(o) => o.id}
                defaultOptions
                value={category}
                loadOptions={async (search) => {
                  const {
                    data: { results: categories },
                  } = await moberriesApi.getJobRoleCategoryList({ search });
                  return categories;
                }}
                onChange={async (option) => {
                  setCategory(option);
                  router.push({
                    pathname: router.route,
                    query: updateQueryParams(params, {
                      category: option?.id ?? null,
                    }),
                  });
                }}
              />
            </Col>
            <Col xs={12} md={4} lg={3} className="pt-1 pr-md-1">
              <AsyncSelect
                id="select-city"
                isClearable
                getOptionLabel={(o) => o.name}
                getOptionValue={(o) => o.placeId}
                defaultOptions={defaultCities}
                onChange={(option) => {
                  setLocation(option);
                  router.push({
                    pathname: router.route,
                    query: updateQueryParams(params, {
                      location: option?.placeId ?? null,
                    }),
                  });
                }}
                value={location}
                loadOptions={async (search) => {
                  const {
                    data: { results: cities },
                  } = await moberriesApi.getCities({ search });
                  return cities;
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultJobsFilter;
