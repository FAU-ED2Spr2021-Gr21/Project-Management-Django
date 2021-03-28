from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipFrom
)

class Actor(StructuredNode):
    id                                 = StringProperty(index = True )
    name                               = StringProperty()
    id                                 = StringProperty()
    actor                              = RelationshipFrom('.actor.Actor', 'HAS_ACTOR')
