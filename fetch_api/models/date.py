from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipFrom
)


class Date(StructuredNode):
    id = StringProperty(index=True)
    text = StringProperty()
    type = StringProperty()
    entity = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')
