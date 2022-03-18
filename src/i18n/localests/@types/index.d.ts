import { Activity } from './activity';
import { Agent } from './agent';
import { Common } from './common';
import { Conditions } from './conditions';
import { Contact } from './contact';
import { Feature } from './feature';
import { Footer } from './footer';
import { Header } from './header';
import { Promotion } from './promotion';

type IResources = {
  activity: Activity;
  agent: Agent;
  common: Common;
  conditions: Conditions;
  contact: Contact;
  feature: Feature;
  footer: Footer;
  header: Header;
  promotion: Promotion;
};

export default IResources;
