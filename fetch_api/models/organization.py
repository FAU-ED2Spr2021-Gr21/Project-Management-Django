from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipFrom
)

class Organization(StructuredNode):
    id                                 = StringProperty(index = True)
    text                               = StringProperty()
    type                               = StringProperty()
    entity                             = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')
