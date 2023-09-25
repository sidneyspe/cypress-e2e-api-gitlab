import { faker } from '@faker-js/faker';

describe('Create issue', () => {
  beforeEach(() => cy.api_deleteProjects());

  it('successfully', () => {
    const issue = {
      title: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(3),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      },
    };

    cy.api_createIssue(issue).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.title).to.equal(issue.title);
      expect(res.body.description).to.equal(issue.description);
    });
  });
});
